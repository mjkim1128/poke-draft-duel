package com.minsu.battlefactory.controller;

import java.util.Optional;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.minsu.battlefactory.service.FactorySetService;

@RestController
@RequestMapping("/api/factory-sets")
public class FactorySetController {

    private final FactorySetService factorySetService;

    public FactorySetController(FactorySetService factorySetService) {
        this.factorySetService = factorySetService;
    }

    // 예: /api/factory-sets/random?species=klefki  (ability=, move= 를 더하면 그 특성/기술이 있는 세트 중에서 고른다.
    //     stone=true는 메가스톤을 든 세트 중에서, stone=false는 메가스톤이 아닌 세트 중에서, item=은 그 도구를 든 세트 중에서 고른다)
    // 세트가 있으면 200 + 세트 JSON, 그 포켓몬의 세트가 없으면 204(내용 없음).
    // 세트가 없는 것은 정상적인 경우라서 404로 응답하지 않는다.
    @GetMapping("/random")
    public ResponseEntity<String> random(
            @RequestParam String species,
            @RequestParam(required = false) String ability,
            @RequestParam(required = false) String move,
            @RequestParam(required = false) Boolean stone,
            @RequestParam(required = false) String item) {
        Optional<String> payload = factorySetService.findRandomPayload(species, ability, move, stone, item);
        if (payload.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(payload.get());
    }
}
