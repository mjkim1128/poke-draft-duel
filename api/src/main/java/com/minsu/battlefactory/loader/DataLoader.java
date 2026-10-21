package com.minsu.battlefactory.loader;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.SmartInitializingSingleton;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import com.minsu.battlefactory.domain.FactorySet;
import com.minsu.battlefactory.domain.Item;
import com.minsu.battlefactory.domain.Move;
import com.minsu.battlefactory.domain.Pokemon;
import com.minsu.battlefactory.repository.FactorySetRepository;
import com.minsu.battlefactory.repository.ItemRepository;
import com.minsu.battlefactory.repository.MoveRepository;
import com.minsu.battlefactory.repository.PokemonRepository;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

// 시드 JSON(PokeAPI에서 내려받아 추려 둔 데이터)을 DB에 넣는다.
// SmartInitializingSingleton은 모든 빈이 만들어진 직후, 웹 서버가 요청을 받기 **전에** 실행된다.
// (예전의 ApplicationRunner는 웹 서버가 이미 열린 뒤에 실행되어서, CPU가 느린 환경에서는
// 적재가 끝나기 전의 몇 초~수십 초 동안 요청이 빈 DB를 보고 실패할 수 있었다.)
@Component
public class DataLoader implements SmartInitializingSingleton {

    private static final Logger log = LoggerFactory.getLogger(DataLoader.class);

    private final PokemonRepository pokemonRepository;
    private final MoveRepository moveRepository;
    private final ItemRepository itemRepository;
    private final FactorySetRepository factorySetRepository;
    private final ObjectMapper objectMapper;

    public DataLoader(PokemonRepository pokemonRepository, MoveRepository moveRepository,
            ItemRepository itemRepository, FactorySetRepository factorySetRepository, ObjectMapper objectMapper) {
        this.pokemonRepository = pokemonRepository;
        this.moveRepository = moveRepository;
        this.itemRepository = itemRepository;
        this.factorySetRepository = factorySetRepository;
        this.objectMapper = objectMapper;
    }

    @Override
    public void afterSingletonsInstantiated() {
        try {
            loadAll();
        } catch (IOException e) {
            throw new IllegalStateException("시드 데이터를 읽지 못했습니다", e);
        }
    }

    private void loadAll() throws IOException {
        // 비어 있을 때만 적재해서, 다시 실행해도 중복되지 않게 한다
        if (pokemonRepository.count() == 0) {
            loadPokemon();
        }
        if (moveRepository.count() == 0) {
            loadMoves();
        }
        if (itemRepository.count() == 0) {
            loadItems();
        }
        if (factorySetRepository.count() == 0) {
            loadFactorySets();
        }
        log.info("데이터 적재 상태: pokemon={}행(풀 {}), move={}행, item={}행, factory_set={}행",
                pokemonRepository.count(), pokemonRepository.findPoolIds().size(), moveRepository.count(),
                itemRepository.count(), factorySetRepository.count());
    }

    private void loadPokemon() throws IOException {
        // 게임에 등장하는 포켓몬 번호 목록. 여기에 없는 포켓몬(보스 전용)은 무작위로 뽑히지 않는다.
        Set<Long> poolIds = new HashSet<>();
        for (JsonNode id : readJson("data/pool.json")) {
            poolIds.add(id.asLong());
        }

        JsonNode root = readJson("data/pokemon.json");
        List<Pokemon> pokemons = new ArrayList<>();

        for (JsonNode node : root) {
            JsonNode types = node.get("types");
            String type1 = types.get(0).get("type").get("name").asString();
            String type2 = types.size() > 1 ? types.get(1).get("type").get("name").asString() : null;

            int bst = 0;
            for (JsonNode stat : node.get("stats")) {
                bst += stat.get("base_stat").asInt();
            }

            List<String> moveNames = new ArrayList<>();
            for (JsonNode m : node.get("moves")) {
                moveNames.add(m.get("move").get("name").asString());
            }

            long id = node.get("id").asLong();
            pokemons.add(new Pokemon(
                    id,
                    node.get("name").asString(),
                    textOrNull(node, "korean_name"),
                    type1,
                    type2,
                    bst,
                    poolIds.contains(id),
                    objectMapper.writeValueAsString(node),
                    moveNames));
        }

        pokemonRepository.saveAll(pokemons);
    }

    private void loadMoves() throws IOException {
        JsonNode root = readJson("data/moves.json");
        List<Move> moves = new ArrayList<>();

        for (JsonNode node : root) {
            // 상태 기술은 power가 null이라, asInt()를 바로 쓰면 0이 되어 구분이 안 된다
            JsonNode power = node.get("power");
            Integer powerValue = (power == null || power.isNull()) ? null : power.asInt();

            moves.add(new Move(
                    node.get("id").asLong(),
                    node.get("name").asString(),
                    textOrNull(node, "korean_name"),
                    node.get("type").get("name").asString(),
                    node.get("damage_class").get("name").asString(),
                    powerValue,
                    node.get("priority").asInt(),
                    objectMapper.writeValueAsString(node)));
        }

        moveRepository.saveAll(moves);
    }

    private void loadItems() throws IOException {
        JsonNode root = readJson("data/items.json");
        List<Item> items = new ArrayList<>();

        for (JsonNode node : root) {
            items.add(new Item(
                    node.get("id").asLong(),
                    node.get("name").asString(),
                    textOrNull(node, "korean_name"),
                    node.get("category").get("name").asString(),
                    objectMapper.writeValueAsString(node)));
        }

        itemRepository.saveAll(items);
    }

    private void loadFactorySets() throws IOException {
        JsonNode root = readJson("data/factory_sets.json");
        List<FactorySet> sets = new ArrayList<>();

        for (JsonNode node : root) {
            sets.add(new FactorySet(
                    node.get("species").asString(),
                    objectMapper.writeValueAsString(node.get("set"))));
        }

        factorySetRepository.saveAll(sets);
    }

    // 값이 없거나 null이면 null, 있으면 문자열
    private String textOrNull(JsonNode parent, String field) {
        JsonNode value = parent.get(field);
        return (value == null || value.isNull()) ? null : value.asString();
    }

    private JsonNode readJson(String classpathLocation) throws IOException {
        try (InputStream in = new ClassPathResource(classpathLocation).getInputStream()) {
            return objectMapper.readTree(in);
        }
    }
}
