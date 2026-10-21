package com.minsu.battlefactory.service;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.minsu.battlefactory.domain.Move;
import com.minsu.battlefactory.domain.Pokemon;
import com.minsu.battlefactory.exception.NotFoundException;
import com.minsu.battlefactory.repository.MoveRepository;
import com.minsu.battlefactory.repository.PokemonRepository;

@Service
public class PokemonService {

    private final PokemonRepository pokemonRepository;
    private final MoveRepository moveRepository;

    public PokemonService(PokemonRepository pokemonRepository, MoveRepository moveRepository) {
        this.pokemonRepository = pokemonRepository;
        this.moveRepository = moveRepository;
    }

    public List<String> findAllPayloads() {
        return pokemonRepository.findAllByOrderByIdAsc()
                .stream()
                .map(Pokemon::getPayload)
                .toList();
    }

    public String findPayloadById(Long id) {
        Optional<Pokemon> found = pokemonRepository.findById(id);
        if (found.isEmpty()) {
            throw new NotFoundException("포켓몬을 찾을 수 없습니다: " + id);
        }
        return found.get().getPayload();
    }

    // 게임에 등장하는 포켓몬(풀) 중에서, 제외할 번호를 뺀 하나를 무작위로 골라 payload를 돌려준다.
    // 보스 전용처럼 풀에 없는 포켓몬은 뽑히지 않는다.
    public String findRandomPayload(Collection<Long> excludeIds) {
        Set<Long> excluded = new HashSet<>(excludeIds);
        List<Long> candidates = pokemonRepository.findPoolIds().stream()
                .filter(id -> !excluded.contains(id))
                .toList();
        if (candidates.isEmpty()) {
            throw new NotFoundException("뽑을 수 있는 포켓몬이 없습니다");
        }
        Long picked = candidates.get(ThreadLocalRandom.current().nextInt(candidates.size()));
        return findPayloadById(picked);
    }

    public String findPayloadByName(String name) {
        Optional<Pokemon> found = pokemonRepository.findByName(name);
        if (found.isEmpty()) {
            throw new NotFoundException("포켓몬을 찾을 수 없습니다: " + name);
        }
        return found.get().getPayload();
    }

    // 이 포켓몬이 배우는 모든 기술의 payload를 학습 목록 순서대로 돌려준다.
    // moveNames는 지연 로딩이라, 트랜잭션 안에서 읽어야 한다.
    @Transactional(readOnly = true)
    public List<String> findMovePayloadsById(Long id) {
        Optional<Pokemon> found = pokemonRepository.findById(id);
        if (found.isEmpty()) {
            throw new NotFoundException("포켓몬을 찾을 수 없습니다: " + id);
        }
        List<String> moveNames = found.get().getMoveNames();

        Map<String, String> payloadByName = moveRepository.findByNameIn(moveNames).stream()
                .collect(Collectors.toMap(Move::getName, Move::getPayload));

        return moveNames.stream()
                .map(payloadByName::get)
                .filter(Objects::nonNull)
                .toList();
    }
}
