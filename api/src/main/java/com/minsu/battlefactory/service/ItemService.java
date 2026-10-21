package com.minsu.battlefactory.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.minsu.battlefactory.domain.Item;
import com.minsu.battlefactory.exception.NotFoundException;
import com.minsu.battlefactory.repository.ItemRepository;

@Service
public class ItemService {

    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<String> findAllPayloads() {
        return itemRepository.findAllByOrderByIdAsc()
                .stream()
                .map(Item::getPayload)
                .toList();
    }

    public String findPayloadByName(String name) {
        Optional<Item> found = itemRepository.findByName(name);
        if (found.isEmpty()) {
            throw new NotFoundException("도구를 찾을 수 없습니다: " + name);
        }
        return found.get().getPayload();
    }
}
