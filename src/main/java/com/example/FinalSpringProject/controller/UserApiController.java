package com.example.FinalSpringProject.controller;

import com.example.FinalSpringProject.entity.ClassUser;
import com.example.FinalSpringProject.repository.ClassUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserApiController {

    @Autowired
    private ClassUserRepository classUserRepository;

    @GetMapping("/user-info/{userId}")
    public ResponseEntity<?> getUserInfo(@PathVariable String userId) {
        ClassUser user = classUserRepository.findByUserID(userId);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        // JSON 응답 보내기 (엔티티 그대로 보내도 되지만, DTO로 보내면 더 안정적)
        return ResponseEntity.ok(user);
    }
}

