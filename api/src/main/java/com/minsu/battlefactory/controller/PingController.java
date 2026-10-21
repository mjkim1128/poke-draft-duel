package com.minsu.battlefactory.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// 서버가 살아 있는지 확인하는 가장 가벼운 요청.
// 게임 화면이 열려 있는 동안 주기적으로 호출해서(호스팅이 서버를 재우지 않게), 배포 서비스의 상태 확인 주소로도 쓴다.
@RestController
@RequestMapping("/api/ping")
public class PingController {

    @GetMapping
    public ResponseEntity<String> ping() {
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body("{\"status\":\"ok\"}");
    }
}
