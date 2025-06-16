package com.example.FinalSpringProject.controller;

import com.example.FinalSpringProject.entity.ClassUser;
import com.example.FinalSpringProject.entity.etcInfo;
import com.example.FinalSpringProject.form.ClassUserCreateForm;
import com.example.FinalSpringProject.repository.ClassUserRepository;
import com.example.FinalSpringProject.repository.EtcInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserApiController {

    private final ClassUserRepository classUserRepository;
    private final EtcInfoRepository etcInfoRepository;

    @Transactional
    @GetMapping("/user-info/{userId}")
    public ResponseEntity<?> getUserInfo(@PathVariable String userId) {
        ClassUser user = classUserRepository.findByUserID(userId);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        ClassUserCreateForm form = new ClassUserCreateForm();
        form.setClassID(user.getClassID());
        form.setUserID(user.getUserID());
        form.setUserName(user.getUserName());
        form.setUserEmail(user.getUserEmail());
        form.setUserTel(user.getUserTel());
        form.setUserAddress(user.getUserAddress());

        if (user.getEtcInfo() != null) {
            form.setAuthOpinion(user.getEtcInfo().getAuthOpinion());
            form.setInterestJob(user.getEtcInfo().getInterestJob());
        }

        return ResponseEntity.ok(form);
    }


}
