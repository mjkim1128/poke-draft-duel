package com.minsu.battlefactory;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.minsu.battlefactory.repository.ItemRepository;
import com.minsu.battlefactory.service.FactorySetService;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

// 세트를 고를 때 메가스톤 세트만 / 메가스톤이 아닌 세트만 고를 수 있는지 확인한다.
@SpringBootTest
class FactorySetStoneTests {

    @Autowired
    FactorySetService factorySetService;

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    ObjectMapper objectMapper;

    private Set<String> stones() {
        return itemRepository.findByCategory("mega-stones").stream().map(i -> i.getName()).collect(Collectors.toSet());
    }

    private String itemOf(Optional<String> payload) {
        assertTrue(payload.isPresent());
        JsonNode item = objectMapper.readTree(payload.get()).get("item");
        return item == null || item.isNull() ? null : item.asString();
    }

    @Test
    void megaStonesAreLoaded() {
        assertTrue(stones().contains("charizardite-x"));
        assertTrue(stones().size() > 50);
    }

    @Test
    void stoneTrueGivesOnlyStoneSets() {
        Set<String> stones = stones();
        for (int i = 0; i < 60; i++) {
            String item = itemOf(factorySetService.findRandomPayload("scolipede", null, null, true));
            assertTrue(stones.contains(item), "메가스톤이 아님: " + item);
        }
    }

    @Test
    void stoneFalseGivesOnlyNonStoneSets() {
        Set<String> stones = stones();
        for (int i = 0; i < 60; i++) {
            String item = itemOf(factorySetService.findRandomPayload("scolipede", null, null, false));
            assertFalse(item != null && stones.contains(item), "메가스톤임: " + item);
        }
    }

    @Test
    void stoneNullGivesBothKinds() {
        Set<String> stones = stones();
        boolean sawStone = false;
        boolean sawOther = false;
        for (int i = 0; i < 300 && !(sawStone && sawOther); i++) {
            String item = itemOf(factorySetService.findRandomPayload("scolipede", null, null, null));
            if (item != null && stones.contains(item)) {
                sawStone = true;
            } else {
                sawOther = true;
            }
        }
        assertTrue(sawStone && sawOther);
    }

    @Test
    void speciesWithoutStoneSetsStillGetASetWhateverIsAsked() {
        // 메가진화하지 못하는 종은 메가스톤 세트가 없으므로, stone=true여도 있는 세트 중에서 고른다
        assertTrue(factorySetService.findRandomPayload("klefki", null, null, true).isPresent());
        assertTrue(factorySetService.findRandomPayload("klefki", null, null, false).isPresent());
    }

    @Test
    void itemOptionPicksOnlySetsWithThatItem() {
        for (int i = 0; i < 60; i++) {
            String item = itemOf(factorySetService.findRandomPayload("archaludon", "stamina", "electro-shot", null, "sitrus-berry"));
            assertTrue("sitrus-berry".equals(item), "자뭉열매가 아님: " + item);
        }
    }

    @Test
    void itemOptionFallsBackWhenNoSetHasThatItem() {
        assertTrue(factorySetService.findRandomPayload("klefki", null, null, null, "no-such-item").isPresent());
    }

    @Test
    void arrayItemsAreResolvedToOneItem() {
        // 거북왕의 한 세트는 도구가 [하양허브, 기합의띠] 중 하나다. 돌려줄 때는 글자 하나로 정해서 준다.
        Set<String> seen = new java.util.HashSet<>();
        for (int i = 0; i < 200; i++) {
            Optional<String> payload = factorySetService.findRandomPayload("blastoise", null, null, false, "white-herb,focus-sash");
            JsonNode item = objectMapper.readTree(payload.get()).get("item");
            assertTrue(item.isString(), "도구가 글자 하나여야 함: " + item);
            assertTrue(item.asString().equals("white-herb") || item.asString().equals("focus-sash"));
            seen.add(item.asString());
        }
        assertTrue(seen.contains("white-herb") && seen.contains("focus-sash"), "두 도구가 모두 나와야 함: " + seen);
    }

    @Test
    void noPayloadEverContainsAnItemArray() {
        for (String species : new String[] {"blastoise", "archaludon", "scolipede", "klefki"}) {
            for (int i = 0; i < 40; i++) {
                JsonNode item = objectMapper.readTree(factorySetService.findRandomPayload(species).get()).get("item");
                assertTrue(item == null || item.isNull() || item.isString(), species + " 도구가 배열로 나옴: " + item);
            }
        }
    }

    @Test
    void stoneFalseNeverReturnsAMegaStone() {
        for (int i = 0; i < 60; i++) {
            String item = itemOf(factorySetService.findRandomPayload("blastoise", null, null, false));
            assertFalse(item != null && stones().contains(item), "메가스톤이 나옴: " + item);
        }
    }

    @Test
    void abilityIsStrongerThanStone() {
        // 라이츄의 메가스톤 세트에는 정전기가 없다. stone=true여도 정전기 조건을 먼저 지킨다.
        for (int i = 0; i < 40; i++) {
            JsonNode set = objectMapper.readTree(factorySetService.findRandomPayload("raichu", "static", null, true).get());
            boolean hasStatic = false;
            JsonNode ability = set.get("ability");
            if (ability.isArray()) {
                for (JsonNode n : ability) {
                    hasStatic |= "static".equals(n.asString());
                }
            } else {
                hasStatic = "static".equals(ability.asString());
            }
            assertTrue(hasStatic, "정전기가 아님: " + ability);
        }
    }
}
