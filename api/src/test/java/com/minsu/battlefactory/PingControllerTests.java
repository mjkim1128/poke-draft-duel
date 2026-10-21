package com.minsu.battlefactory;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import com.minsu.battlefactory.controller.PingController;

class PingControllerTests {

    @Test
    void pingAnswersOkAsJson() {
        ResponseEntity<String> response = new PingController().ping();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(MediaType.APPLICATION_JSON, response.getHeaders().getContentType());
        assertEquals("{\"status\":\"ok\"}", response.getBody());
    }
}
