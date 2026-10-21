package com.minsu.battlefactory;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.core.io.ClassPathResource;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

// 기술 시드 데이터의 부가 효과 정보(meta)가 비어 있지 않은지 확인한다.
// 9세대 기술은 PokeAPI에 meta가 없어서, api/tools/enrich-move-meta.mjs로 채워 둔다.
class MoveSeedTests {

    private final JsonNode moves = load();

    private JsonNode load() {
        try (InputStream in = new ClassPathResource("data/moves.json").getInputStream()) {
            return new ObjectMapper().readTree(in);
        } catch (Exception e) {
            throw new IllegalStateException(e);
        }
    }

    private JsonNode move(String name) {
        for (JsonNode m : moves) {
            if (name.equals(m.get("name").asString())) {
                return m;
            }
        }
        throw new AssertionError("기술을 찾을 수 없음: " + name);
    }

    @Test
    void everyGameMoveHasMeta() {
        // 번호 10000 이상은 섀도 기술(게임에서 쓰이지 않음)
        List<String> missing = new ArrayList<>();
        for (JsonNode m : moves) {
            if (m.get("id").asInt() < 10000 && m.get("meta").isNull()) {
                missing.add(m.get("name").asString());
            }
        }
        assertTrue(missing.isEmpty(), "meta가 없는 기술: " + missing);
    }

    @Test
    void torchSongRaisesUsersSpecialAttack() {
        JsonNode torchSong = move("torch-song");

        assertEquals("damage-raise", torchSong.get("meta").get("category").get("name").asString());
        assertEquals(100, torchSong.get("meta").get("stat_chance").asInt());
        assertEquals(1, torchSong.get("stat_changes").get(0).get("change").asInt());
        assertEquals("special-attack", torchSong.get("stat_changes").get(0).get("stat").get("name").asString());
    }
}
