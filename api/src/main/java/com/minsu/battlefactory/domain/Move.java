package com.minsu.battlefactory.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Move {

    // 기술 번호를 그대로 쓰므로 @GeneratedValue를 붙이지 않는다
    @Id
    private Long id;

    @Column(unique = true)
    private String name;

    // 한글 이름 (PokeAPI에 없으면 null)
    private String koreanName;

    // 필드 이름이 type이면 DB 예약어와 겹칠 수 있어 moveType으로 둔다
    private String moveType;

    // physical, special, status
    private String damageClass;

    // 상태 기술은 위력이 없으므로 int가 아니라 Integer (null 허용)
    private Integer power;

    private int priority;

    // 클라이언트가 받는 JSON 한 덩어리
    @Column(length = 100000)
    private String payload;

    protected Move() {
    }

    public Move(Long id, String name, String koreanName, String moveType, String damageClass, Integer power,
            int priority, String payload) {
        this.id = id;
        this.name = name;
        this.koreanName = koreanName;
        this.moveType = moveType;
        this.damageClass = damageClass;
        this.power = power;
        this.priority = priority;
        this.payload = payload;
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

    public String getMoveType() {
        return moveType;
    }

    public String getDamageClass() {
        return damageClass;
    }

    public Integer getPower() {
        return power;
    }

    public int getPriority() {
        return priority;
    }

    public String getPayload() {
        return payload;
    }
}
