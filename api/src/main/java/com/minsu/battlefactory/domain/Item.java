package com.minsu.battlefactory.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Item {

    // 도구 번호를 그대로 쓰므로 @GeneratedValue를 붙이지 않는다
    @Id
    private Long id;

    @Column(unique = true)
    private String name;

    // 한글 이름 (PokeAPI에 없으면 null)
    private String koreanName;

    // PokeAPI의 도구 분류 (예: held-items, berries)
    private String category;

    // 클라이언트가 받는 JSON 한 덩어리
    @Column(length = 20000)
    private String payload;

    protected Item() {
    }

    public Item(Long id, String name, String koreanName, String category, String payload) {
        this.id = id;
        this.name = name;
        this.koreanName = koreanName;
        this.category = category;
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

    public String getCategory() {
        return category;
    }

    public String getPayload() {
        return payload;
    }
}
