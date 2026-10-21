package com.minsu.battlefactory.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

// 종족별 실전 세트(도구, 특성, 기술) 하나. 한 포켓몬에 여러 세트가 있다.
@Entity
public class FactorySet {

    // 세트는 고유한 번호가 없으므로, 이번에는 DB가 번호를 자동으로 붙인다
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 포켓몬 이름 (예: klefki). 세트를 이름으로 찾는다.
    @Column(nullable = false)
    private String species;

    // 세트 하나의 JSON: { "item": ..., "ability": ..., "moves": [[{slug}, ...], ...] }
    @Column(length = 20000, nullable = false)
    private String payload;

    protected FactorySet() {
    }

    public FactorySet(String species, String payload) {
        this.species = species;
        this.payload = payload;
    }

    public Long getId() {
        return id;
    }

    public String getSpecies() {
        return species;
    }

    public String getPayload() {
        return payload;
    }
}
