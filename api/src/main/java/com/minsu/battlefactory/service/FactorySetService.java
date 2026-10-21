package com.minsu.battlefactory.service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.stereotype.Service;

import com.minsu.battlefactory.domain.FactorySet;
import com.minsu.battlefactory.repository.FactorySetRepository;

@Service
public class FactorySetService {

    private final FactorySetRepository factorySetRepository;

    public FactorySetService(FactorySetRepository factorySetRepository) {
        this.factorySetRepository = factorySetRepository;
    }

    // 그 포켓몬의 실전 세트 중 하나를 무작위로 골라 payload를 돌려준다.
    // 세트가 없는 포켓몬이 많아서(풀의 약 30%), 없는 것은 예외가 아니라 빈 값이다.
    public Optional<String> findRandomPayload(String species) {
        List<FactorySet> sets = factorySetRepository.findBySpecies(species);
        if (sets.isEmpty()) {
            return Optional.empty();
        }
        FactorySet picked = sets.get(ThreadLocalRandom.current().nextInt(sets.size()));
        return Optional.of(picked.getPayload());
    }
}
