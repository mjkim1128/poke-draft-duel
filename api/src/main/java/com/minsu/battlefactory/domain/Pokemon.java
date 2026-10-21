package com.minsu.battlefactory.domain;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;

@Entity
public class Pokemon {

    // 도감 번호(1~1025)를 그대로 쓰므로 @GeneratedValue를 붙이지 않는다
    @Id
    private Long id;

    @Column(unique = true)
    private String name;

    // 한글 이름 (PokeAPI에 없으면 null)
    private String koreanName;

    private String type1;

    // 단일 타입 포켓몬은 null
    private String type2;

    // 여섯 능력치의 합계 (층별 난이도 조회용)
    private int bst;

    // 게임에 등장하는 포켓몬인지. false인 포켓몬(보스 전용 등)은 무작위로 뽑히지 않고, 이름으로만 조회된다.
    private boolean inPool;

    // 클라이언트가 받는 JSON 한 덩어리
    @Column(length = 100000)
    private String payload;

    // 이 포켓몬이 배우는 기술 이름 목록. pokemon_move 테이블에 한 줄씩 저장된다.
    // 기술 데이터를 한 번에 조회할 때(예: 이 포켓몬의 모든 기술) 쓴다.
    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "pokemon_move", joinColumns = @JoinColumn(name = "pokemon_id"))
    @Column(name = "move_name")
    private List<String> moveNames = new ArrayList<>();

    protected Pokemon() {
    }

    public Pokemon(Long id, String name, String koreanName, String type1, String type2, int bst, boolean inPool,
            String payload, List<String> moveNames) {
        this.id = id;
        this.name = name;
        this.koreanName = koreanName;
        this.type1 = type1;
        this.type2 = type2;
        this.bst = bst;
        this.inPool = inPool;
        this.payload = payload;
        this.moveNames = moveNames;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getKoreanName() {
        return koreanName;
    }

    public String getType1() {
        return type1;
    }

    public String getType2() {
        return type2;
    }

    public int getBst() {
        return bst;
    }

    public boolean isInPool() {
        return inPool;
    }

    public String getPayload() {
        return payload;
    }

    public List<String> getMoveNames() {
        return moveNames;
    }
}
