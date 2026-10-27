package com.minsu.battlefactory.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;
import tools.jackson.databind.node.ObjectNode;

import com.minsu.battlefactory.domain.FactorySet;
import com.minsu.battlefactory.repository.FactorySetRepository;
import com.minsu.battlefactory.repository.ItemRepository;

@Service
public class FactorySetService {

    private final FactorySetRepository factorySetRepository;
    private final ItemRepository itemRepository;
    private final ObjectMapper objectMapper;

    // 메가스톤의 이름들 (도구 분류가 mega-stones인 것). 처음 쓸 때 한 번 읽어 둔다.
    private volatile Set<String> megaStones;

    public FactorySetService(FactorySetRepository factorySetRepository, ItemRepository itemRepository, ObjectMapper objectMapper) {
        this.factorySetRepository = factorySetRepository;
        this.itemRepository = itemRepository;
        this.objectMapper = objectMapper;
    }

    // 그 포켓몬의 실전 세트 중 하나를 무작위로 골라 payload를 돌려준다.
    // 세트가 없는 포켓몬이 많아서(풀의 약 30%), 없는 것은 예외가 아니라 빈 값이다.
    public Optional<String> findRandomPayload(String species) {
        return findRandomPayload(species, null, null);
    }

    // 특성(ability)이나 기술(move)을 주면 그것을 가진 세트 중에서 고른다. 네임드 트레이너의 팀 콘셉트
    // (비 팀의 잔비, 트릭룸 팀의 트릭룸 등)를 맞추려고 쓴다. 조건에 맞는 세트가 없으면 아무 세트나 고른다.
    public Optional<String> findRandomPayload(String species, String ability, String move) {
        return findRandomPayload(species, ability, move, null);
    }

    // stone이 true이면 메가스톤을 든 세트 중에서, false이면 메가스톤이 아닌 도구(또는 도구 없음)를 든 세트 중에서 고른다.
    // null이면 가리지 않는다. stone은 특성, 기술, 도구 조건보다 약해서, 그 조건을 채우는 세트가 메가스톤 세트 쪽에 없으면 조건을 먼저 지킨다.
    public Optional<String> findRandomPayload(String species, String ability, String move, Boolean stone) {
        return findRandomPayload(species, ability, move, stone, null);
    }

    // item은 쉼표로 이은 도구 이름들이다. 그 중 하나를 들 수 있는 세트 중에서 고른다 (네임드 트레이너가 세트를 고정할 때).
    // 세트의 도구는 하나이거나 여러 개 중 하나(배열)일 수 있다. 배열이면 조건(stone, item)에 맞는 것 중 하나로 정해서 돌려준다.
    // 조건에 맞는 세트가 없으면 가리지 않는다.
    public Optional<String> findRandomPayload(String species, String ability, String move, Boolean stone, String item) {
        List<FactorySet> sets = factorySetRepository.findBySpecies(species);
        if (sets.isEmpty()) {
            return Optional.empty();
        }
        Set<String> wanted = item == null
                ? null
                : Arrays.stream(item.split(",")).map(String::trim).filter(s -> !s.isEmpty()).collect(Collectors.toSet());
        if (wanted != null && wanted.isEmpty()) {
            wanted = null;
        }
        // 조건의 강한 순서: 도구(item) > 특성, 기술 > 메가스톤 여부(stone). 맞는 세트가 없으면 그 조건은 건너뛴다.
        if (wanted != null) {
            Set<String> w = wanted;
            List<FactorySet> byItem = sets.stream().filter(s -> itemsOf(parse(s.getPayload())).stream().anyMatch(w::contains)).toList();
            if (!byItem.isEmpty()) {
                sets = byItem;
            }
        }
        List<FactorySet> matching = sets.stream().filter(s -> matches(s.getPayload(), ability, move)).toList();
        if (!matching.isEmpty()) {
            sets = matching;
        }
        if (stone != null) {
            List<FactorySet> byStone = sets.stream().filter(s -> compatible(itemsOf(parse(s.getPayload())), stone)).toList();
            if (!byStone.isEmpty()) {
                sets = byStone;
            }
        }
        FactorySet picked = sets.get(ThreadLocalRandom.current().nextInt(sets.size()));
        return Optional.of(resolveItem(picked.getPayload(), stone, wanted));
    }

    private JsonNode parse(String payload) {
        return objectMapper.readTree(payload);
    }

    // 세트의 도구들 (하나이면 하나, 배열이면 여러 개, 도구가 없으면 빈 목록)
    private List<String> itemsOf(JsonNode set) {
        JsonNode item = set.get("item");
        List<String> items = new ArrayList<>();
        if (item == null || item.isNull()) {
            return items;
        }
        if (item.isArray()) {
            for (JsonNode n : item) {
                items.add(n.asString());
            }
        } else {
            items.add(item.asString());
        }
        return items;
    }

    // stone 조건에 맞는 세트인가 (도구가 없으면 메가스톤이 아니다)
    private boolean compatible(List<String> items, Boolean stone) {
        if (items.isEmpty()) {
            return !stone;
        }
        return items.stream().anyMatch(i -> megaStoneNames().contains(i) == stone);
    }

    // 도구가 여러 개 중 하나인 세트는, 조건에 맞는 도구 하나로 정해서 payload의 item을 글자 하나로 바꿔 돌려준다
    private String resolveItem(String payload, Boolean stone, Set<String> wanted) {
        JsonNode node = parse(payload);
        JsonNode item = node.get("item");
        if (item == null || !item.isArray()) {
            return payload;
        }
        List<String> candidates = itemsOf(node);
        if (stone != null) {
            List<String> byStone = candidates.stream().filter(i -> megaStoneNames().contains(i) == stone).toList();
            if (!byStone.isEmpty()) {
                candidates = byStone;
            }
        }
        if (wanted != null) {
            List<String> byWanted = candidates.stream().filter(wanted::contains).toList();
            if (!byWanted.isEmpty()) {
                candidates = byWanted;
            }
        }
        String chosen = candidates.get(ThreadLocalRandom.current().nextInt(candidates.size()));
        ((ObjectNode) node).put("item", chosen);
        return objectMapper.writeValueAsString(node);
    }

    private Set<String> megaStoneNames() {
        Set<String> names = megaStones;
        if (names == null) {
            names = itemRepository.findByCategory("mega-stones").stream().map(i -> i.getName()).collect(Collectors.toSet());
            megaStones = names;
        }
        return names;
    }

    private boolean matches(String payload, String ability, String move) {
        if (ability == null && move == null) {
            return true;
        }
        JsonNode set = objectMapper.readTree(payload);
        if (ability != null && !hasAbility(set.get("ability"), ability)) {
            return false;
        }
        return move == null || hasMove(set.get("moves"), move);
    }

    // 세트의 특성은 하나일 수도, 여러 개 중 하나를 뽑는 목록일 수도 있다
    private boolean hasAbility(JsonNode node, String ability) {
        if (node == null) {
            return false;
        }
        if (node.isArray()) {
            for (JsonNode n : node) {
                if (ability.equals(n.asString())) {
                    return true;
                }
            }
            return false;
        }
        return ability.equals(node.asString());
    }

    private boolean hasMove(JsonNode slots, String move) {
        if (slots == null) {
            return false;
        }
        for (JsonNode slot : slots) {
            for (JsonNode option : slot) {
                JsonNode slug = option.get("slug");
                if (slug != null && move.equals(slug.asString())) {
                    return true;
                }
            }
        }
        return false;
    }
}
