package com.minsu.battlefactory.repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minsu.battlefactory.domain.Move;

public interface MoveRepository extends JpaRepository<Move, Long> {

    Optional<Move> findByName(String name);

    List<Move> findAllByOrderByIdAsc();

    // 이름 목록에 해당하는 기술을 한 번에 조회 (포켓몬이 배우는 기술을 가져올 때 사용)
    List<Move> findByNameIn(Collection<String> names);
}
