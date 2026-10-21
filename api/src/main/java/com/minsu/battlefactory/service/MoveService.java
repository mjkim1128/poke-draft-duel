package com.minsu.battlefactory.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.minsu.battlefactory.domain.Move;
import com.minsu.battlefactory.exception.NotFoundException;
import com.minsu.battlefactory.repository.MoveRepository;

@Service
public class MoveService {

    private final MoveRepository moveRepository;

    public MoveService(MoveRepository moveRepository) {
        this.moveRepository = moveRepository;
    }

    public List<String> findAllPayloads() {
        return moveRepository.findAllByOrderByIdAsc()
                .stream()
                .map(Move::getPayload)
                .toList();
    }

    public String findPayloadByName(String name) {
        Optional<Move> found = moveRepository.findByName(name);
        if (found.isEmpty()) {
            throw new NotFoundException("기술을 찾을 수 없습니다: " + name);
        }
        return found.get().getPayload();
    }
}
