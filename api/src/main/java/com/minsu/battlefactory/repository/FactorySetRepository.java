package com.minsu.battlefactory.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minsu.battlefactory.domain.FactorySet;

public interface FactorySetRepository extends JpaRepository<FactorySet, Long> {

    List<FactorySet> findBySpecies(String species);
}
