package com.minsu.battlefactory.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.minsu.battlefactory.service.MoveService;

@RestController
@RequestMapping("/api/moves")
public class MoveController {

    private final MoveService moveService;

    public MoveController(MoveService moveService) {
        this.moveService = moveService;
    }

    @GetMapping
    public ResponseEntity<String> findAll() {
        List<String> payloads = moveService.findAllPayloads();
        String json = "[" + String.join(",", payloads) + "]";
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(json);
    }

    @GetMapping("/{name}")
    public ResponseEntity<String> findByName(@PathVariable String name) {
        String json = moveService.findPayloadByName(name);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(json);
    }
}
