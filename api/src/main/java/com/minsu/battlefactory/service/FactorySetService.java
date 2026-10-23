package com.minsu.battlefactory.service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.stereotype.Service;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import com.minsu.battlefactory.domain.FactorySet;
import com.minsu.battlefactory.repository.FactorySetRepository;

@Service
public class FactorySetService {

    private final FactorySetRepository factorySetRepository;
    private final ObjectMapper objectMapper;

    public FactorySetService(FactorySetRepository factorySetRepository, ObjectMapper objectMapper) {
        this.factorySetRepository = factorySetRepository;
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
        List<FactorySet> sets = factorySetRepository.findBySpecies(species);
        if (sets.isEmpty()) {
            return Optional.empty();
        }
        List<FactorySet> matching = sets.stream().filter(s -> matches(s.getPayload(), ability, move)).toList();
        List<FactorySet> from = matching.isEmpty() ? sets : matching;
        FactorySet picked = from.get(ThreadLocalRandom.current().nextInt(from.size()));
        return Optional.of(picked.getPayload());
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
