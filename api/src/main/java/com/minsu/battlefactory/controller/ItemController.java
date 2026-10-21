package com.minsu.battlefactory.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.minsu.battlefactory.service.ItemService;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping
    public ResponseEntity<String> findAll() {
        List<String> payloads = itemService.findAllPayloads();
        String json = "[" + String.join(",", payloads) + "]";
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(json);
    }

    @GetMapping("/{name}")
    public ResponseEntity<String> findByName(@PathVariable String name) {
        String json = itemService.findPayloadByName(name);
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(json);
    }
}
