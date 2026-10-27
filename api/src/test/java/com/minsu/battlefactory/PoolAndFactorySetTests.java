package com.minsu.battlefactory;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.minsu.battlefactory.domain.Pokemon;
import com.minsu.battlefactory.exception.NotFoundException;
import com.minsu.battlefactory.repository.FactorySetRepository;
import com.minsu.battlefactory.repository.PokemonRepository;
import com.minsu.battlefactory.service.FactorySetService;
import com.minsu.battlefactory.service.PokemonService;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

// 게임 풀(무작위로 등장하는 포켓몬)과 실전 세트가 서버에 제대로 올라가 있고, 무작위 선택이 규칙을 지키는지 확인한다.
@SpringBootTest
class PoolAndFactorySetTests {

    @Autowired
    PokemonRepository pokemonRepository;

    @Autowired
    FactorySetRepository factorySetRepository;

    @Autowired
    PokemonService pokemonService;

    @Autowired
    FactorySetService factorySetService;

    @Autowired
    ObjectMapper objectMapper;

    @Test
    void poolHas429PokemonAndNoneAtOrAbove660() {
        List<Long> poolIds = pokemonRepository.findPoolIds();
        assertEquals(429, poolIds.size());

        for (Pokemon p : pokemonRepository.findAll()) {
            if (p.isInPool()) {
                assertTrue(p.getBst() < 660, "종족값 660 이상이 풀에 있음: " + p.getName() + " " + p.getBst());
            }
        }
    }

    @Test
    void bossOnlyPokemonAreNotInThePool() {
        for (String name : List.of("kadabra", "doduo", "grimer")) {
            assertFalse(pokemonRepository.findByName(name).orElseThrow().isInPool(), name);
        }
        // 보스지만 최종 진화형이라 풀에도 있는 포켓몬
        for (String name : List.of("hitmonlee", "electrode", "golem")) {
            assertTrue(pokemonRepository.findByName(name).orElseThrow().isInPool(), name);
        }
    }

    @Test
    void randomPokemonAlwaysComesFromThePool() throws Exception {
        Set<Long> pool = new HashSet<>(pokemonRepository.findPoolIds());
        Set<Long> seen = new HashSet<>();
        for (int i = 0; i < 300; i++) {
            JsonNode node = objectMapper.readTree(pokemonService.findRandomPayload(List.of()));
            long id = node.get("id").asLong();
            assertTrue(pool.contains(id), "풀에 없는 포켓몬이 뽑힘: " + node.get("name").asString());
            seen.add(id);
        }
        assertTrue(seen.size() > 100, "무작위로 보이지 않음: " + seen.size());
    }

    @Test
    void randomPokemonSkipsExcludedIds() throws Exception {
        List<Long> poolIds = pokemonRepository.findPoolIds();
        Long keep = poolIds.get(poolIds.size() / 2);
        List<Long> excludeAllButOne = poolIds.stream().filter(id -> !id.equals(keep)).toList();

        for (int i = 0; i < 5; i++) {
            JsonNode node = objectMapper.readTree(pokemonService.findRandomPayload(excludeAllButOne));
            assertEquals(keep, node.get("id").asLong());
        }
        assertThrows(NotFoundException.class, () -> pokemonService.findRandomPayload(poolIds));
    }

    @Test
    void factorySetCanBeFilteredByAbilityAndMove() throws Exception {
        // 특성을 지정하면 그 특성의 세트만 나온다 (패리퍼에는 예리한눈 세트도 있다)
        for (int i = 0; i < 30; i++) {
            JsonNode set = objectMapper.readTree(factorySetService.findRandomPayload("pelipper", "drizzle", null).orElseThrow());
            assertEquals("drizzle", set.get("ability").asString());
        }
        // 기술을 지정하면 그 기술이 있는 세트만 나온다
        for (int i = 0; i < 30; i++) {
            JsonNode set = objectMapper.readTree(factorySetService.findRandomPayload("bronzong", null, "trick-room").orElseThrow());
            boolean found = false;
            for (JsonNode slot : set.get("moves")) {
                for (JsonNode option : slot) {
                    found |= "trick-room".equals(option.get("slug").asString());
                }
            }
            assertTrue(found);
        }
        // 조건에 맞는 세트가 없으면 아무 세트나 돌려준다
        assertTrue(factorySetService.findRandomPayload("pelipper", "no-such-ability", null).isPresent());
        // 세트가 없는 포켓몬은 그대로 빈 값이다
        assertTrue(factorySetService.findRandomPayload("no-such-pokemon", "drizzle", null).isEmpty());
    }

    @Test
    void factorySetsAreLoaded() throws Exception {
        // 세트를 고칠 때마다 개수가 바뀌므로, 시드 파일의 개수와 비교한다
        try (var in = new org.springframework.core.io.ClassPathResource("data/factory_sets.json").getInputStream()) {
            assertEquals(objectMapper.readTree(in).size(), factorySetRepository.count());
        }
        assertFalse(factorySetRepository.findBySpecies("klefki").isEmpty());

        JsonNode set = objectMapper.readTree(factorySetService.findRandomPayload("klefki").orElseThrow());
        assertTrue(set.has("item"));
        // 클레피에게는 짓궂은마음 세트와 매지션 세트가 있어서, 어느 쪽이 뽑혀도 된다
        assertTrue(java.util.Set.of("prankster", "magician").contains(set.get("ability").asString()));
        assertTrue(set.get("moves").size() >= 2);
        // 기술 칸마다 고를 수 있는 선택지가 slug를 가진다
        assertTrue(set.get("moves").get(0).get(0).has("slug"));
    }

    @Test
    void setsKeepTheOptionalFields() throws Exception {
        // 잠재력(hidden-power)은 hpType을 가진다. 도구가 없는 세트는 item이 null이지만, 지금은 그런 세트가 없을 수 있다
        boolean sawHpType = false;
        for (var s : factorySetRepository.findAll()) {
            JsonNode set = objectMapper.readTree(s.getPayload());
            assertTrue(set.has("item")); // 도구가 없으면 값이 null이어도 항목은 있다
            for (JsonNode slot : set.get("moves")) {
                for (JsonNode option : slot) {
                    if (option.has("hpType")) {
                        sawHpType = true;
                    }
                }
            }
        }
        assertTrue(sawHpType);
    }

    @Test
    void everyPoolPokemonHasASet() {
        // 세트 파일에 나오는 종을 시드에서 읽어, 풀에서 그 종을 뺀 수를 기대값으로 쓴다
        Set<String> speciesWithSets = new HashSet<>();
        try (var in = new org.springframework.core.io.ClassPathResource("data/factory_sets.json").getInputStream()) {
            objectMapper.readTree(in).forEach(row -> speciesWithSets.add(row.get("species").asString()));
        } catch (java.io.IOException e) {
            throw new IllegalStateException(e);
        }
        int expectedWithoutSet = 0;
        int withoutSet = 0;
        for (Pokemon p : pokemonRepository.findAll()) {
            if (!p.isInPool()) {
                continue;
            }
            if (!speciesWithSets.contains(p.getName())) {
                expectedWithoutSet++;
            }
            Optional<String> set = factorySetService.findRandomPayload(p.getName());
            if (set.isEmpty()) {
                withoutSet++;
            }
        }
        // 세트가 없는 포켓몬은 풀에서 빠져 있으므로, 풀의 모든 포켓몬에게 세트가 있다
        assertEquals(0, withoutSet);
        assertEquals(0, expectedWithoutSet);
        assertTrue(factorySetService.findRandomPayload("no-such-pokemon").isEmpty());
    }
}
