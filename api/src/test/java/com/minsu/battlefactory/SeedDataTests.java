package com.minsu.battlefactory;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.minsu.battlefactory.domain.Item;
import com.minsu.battlefactory.domain.Move;
import com.minsu.battlefactory.domain.Pokemon;
import com.minsu.battlefactory.exception.NotFoundException;
import com.minsu.battlefactory.repository.ItemRepository;
import com.minsu.battlefactory.repository.MoveRepository;
import com.minsu.battlefactory.repository.PokemonRepository;
import com.minsu.battlefactory.service.PokemonService;

// 서버가 켜질 때 적재된 시드 데이터(포켓몬, 기술, 도구)가 게임이 기대하는 모양인지 확인한다.
@SpringBootTest
class SeedDataTests {

    @Autowired
    PokemonRepository pokemonRepository;

    @Autowired
    MoveRepository moveRepository;

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    PokemonService pokemonService;

    @Test
    void rowCounts() {
        // 데이터를 고칠 때마다 개수가 바뀌므로, 시드 파일의 개수와 비교한다
        assertEquals(seedSize("pokemon.json"), pokemonRepository.count());
        assertEquals(seedSize("moves.json"), moveRepository.count());
        assertEquals(seedSize("items.json"), itemRepository.count());
    }

    @Test
    void boosterEnergyIsAnItem() {
        assertEquals("부스트에너지", itemRepository.findByName("booster-energy").orElseThrow().getKoreanName());
    }

    private static int seedSize(String file) {
        try (java.io.InputStream in = new org.springframework.core.io.ClassPathResource("data/" + file).getInputStream()) {
            return new tools.jackson.databind.ObjectMapper().readTree(in).size();
        } catch (java.io.IOException e) {
            throw new IllegalStateException(e);
        }
    }

    @Test
    void pokemonAreOrderedByIdAndIncludeGeneration9() {
        List<Pokemon> all = pokemonRepository.findAllByOrderByIdAsc();
        for (int i = 1; i < all.size(); i++) {
            assertTrue(all.get(i - 1).getId() < all.get(i).getId(), "id 오름차순이 아님: " + all.get(i).getName());
        }
        assertTrue(all.get(all.size() - 1).getId() > 905, "9세대 포켓몬이 없음");
    }

    @Test
    void pokemonHaveKoreanNameTypesAndBst() {
        Pokemon excadrill = pokemonRepository.findByName("excadrill").orElseThrow();
        assertEquals("몰드류", excadrill.getKoreanName());
        assertEquals("ground", excadrill.getType1());
        assertEquals("steel", excadrill.getType2());
        assertTrue(excadrill.getBst() > 0 && excadrill.getBst() < 660);
        assertTrue(excadrill.getPayload().contains("\"korean_name\":\"몰드류\""));

        for (Pokemon p : pokemonRepository.findAll()) {
            assertNotNull(p.getKoreanName(), "한글 이름 없음: " + p.getName());
        }
    }

    @Test
    void bossPokemonAreAvailableByName() {
        for (String name : List.of("hitmonlee", "electrode", "doduo", "grimer", "kadabra", "golem")) {
            assertTrue(pokemonRepository.findByName(name).isPresent(), "보스 포켓몬 없음: " + name);
        }
    }

    @Test
    void movesHaveGameFields() {
        Move swordsDance = moveRepository.findByName("swords-dance").orElseThrow();
        assertNull(swordsDance.getPower());
        assertEquals("status", swordsDance.getDamageClass());
        assertTrue(swordsDance.getPayload().contains("\"target\":{\"name\":\"user\"}"));

        Move quickAttack = moveRepository.findByName("quick-attack").orElseThrow();
        assertEquals("전광석화", quickAttack.getKoreanName());
        assertEquals(1, quickAttack.getPriority());
        assertEquals(40, quickAttack.getPower());

        // 한글 이름이 없는 기술은 null (섀도 기술)
        assertNull(moveRepository.findByName("shadow-rush").orElseThrow().getKoreanName());

        for (String name : List.of("secret-power", "hidden-power", "knock-off", "quick-attack", "foul-play")) {
            assertTrue(moveRepository.findByName(name).isPresent(), "기본 기술 없음: " + name);
        }
    }

    @Test
    void itemsHaveKoreanNameAndCategory() {
        Item leftovers = itemRepository.findByName("leftovers").orElseThrow();
        assertEquals("먹다남은음식", leftovers.getKoreanName());
        assertNotNull(leftovers.getCategory());
        assertTrue(leftovers.getPayload().contains("\"sprites\":{\"default\":"));
    }

    // moveNames는 지연 로딩이라 테스트 메서드도 트랜잭션 안에서 읽는다
    @Test
    @Transactional
    void learnedMovesAreFetchedInOneCallInLearnsetOrder() {
        Pokemon excadrill = pokemonRepository.findByName("excadrill").orElseThrow();
        List<String> learnset = excadrill.getMoveNames();
        List<String> payloads = pokemonService.findMovePayloadsById(excadrill.getId());

        // 학습 기술이 전부 기술 목록에 있으므로, 개수가 학습 목록과 같아야 한다
        assertTrue(learnset.size() > 20, "학습 기술이 너무 적음: " + learnset.size());
        assertEquals(learnset.size(), payloads.size());

        // 학습 목록의 순서대로 돌려준다
        for (int i = 0; i < learnset.size(); i++) {
            assertTrue(payloads.get(i).contains("\"name\":\"" + learnset.get(i) + "\""),
                    "순서가 다름: " + learnset.get(i));
        }
        assertTrue(learnset.contains("earthquake"));
    }

    @Test
    void unknownNamesThrowNotFound() {
        assertThrows(NotFoundException.class, () -> pokemonService.findPayloadByName("no-such-pokemon"));
        assertThrows(NotFoundException.class, () -> pokemonService.findMovePayloadsById(999999L));
    }

    @Test
    void payloadsFitInTheirColumns() {
        int maxPokemon = pokemonRepository.findAll().stream().mapToInt(p -> p.getPayload().length()).max().orElse(0);
        int maxMove = moveRepository.findAll().stream().mapToInt(m -> m.getPayload().length()).max().orElse(0);
        int maxItem = itemRepository.findAll().stream().mapToInt(i -> i.getPayload().length()).max().orElse(0);
        System.out.println("MAXLEN pokemon=" + maxPokemon + " move=" + maxMove + " item=" + maxItem);
        assertTrue(maxPokemon < 100000);
        assertTrue(maxMove < 100000);
        assertTrue(maxItem < 20000);
    }
}
