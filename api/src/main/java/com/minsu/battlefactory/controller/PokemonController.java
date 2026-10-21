package com.minsu.battlefactory.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.minsu.battlefactory.service.PokemonService;

@RestController
@RequestMapping("/api/pokemon")
public class PokemonController {

    private final PokemonService pokemonService;

    public PokemonController(PokemonService pokemonService) {
        this.pokemonService = pokemonService;
    }

    // payload는 이미 JSON 문자열이므로, 객체로 다시 변환하지 않고 그대로 응답 본문에 싣는다
    @GetMapping
    public ResponseEntity<String> findAll() {
        return json(toJsonArray(pokemonService.findAllPayloads()));
    }

    // 게임에 등장하는 포켓몬 중 하나를 무작위로. 이미 팀에 있는 번호는 제외한다.
    // 예: /api/pokemon/random?exclude=6,9,150
    @GetMapping("/random")
    public ResponseEntity<String> findRandom(@RequestParam(defaultValue = "") List<Long> exclude) {
        return json(pokemonService.findRandomPayload(exclude));
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> findById(@PathVariable Long id) {
        return json(pokemonService.findPayloadById(id));
    }

    // 보스처럼 이름으로 조회할 때 (예: /api/pokemon/name/grimer)
    @GetMapping("/name/{name}")
    public ResponseEntity<String> findByName(@PathVariable String name) {
        return json(pokemonService.findPayloadByName(name));
    }

    // 이 포켓몬이 배우는 모든 기술을 한 번에 (기술마다 따로 요청하지 않도록)
    @GetMapping("/{id}/moves")
    public ResponseEntity<String> findMoves(@PathVariable Long id) {
        return json(toJsonArray(pokemonService.findMovePayloadsById(id)));
    }

    private static String toJsonArray(List<String> payloads) {
        return "[" + String.join(",", payloads) + "]";
    }

    private static ResponseEntity<String> json(String body) {
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(body);
    }
}
