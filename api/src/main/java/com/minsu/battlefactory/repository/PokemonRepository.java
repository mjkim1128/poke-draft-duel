package com.minsu.battlefactory.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.minsu.battlefactory.domain.Pokemon;

public interface PokemonRepository extends JpaRepository<Pokemon, Long> {

    Optional<Pokemon> findByName(String name);

    List<Pokemon> findAllByOrderByIdAsc();

    // 게임에 등장하는 포켓몬(풀)의 번호만 가져온다. payload 같은 큰 값은 읽지 않는다.
    @Query("select p.id from Pokemon p where p.inPool = true order by p.id")
    List<Long> findPoolIds();
}
