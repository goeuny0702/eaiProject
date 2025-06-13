package com.example.FinalSpringProject.controller;

import com.example.FinalSpringProject.entity.ClassUser;
import com.example.FinalSpringProject.entity.etcInfo;
import com.example.FinalSpringProject.form.EtcInfoForm;
import com.example.FinalSpringProject.repository.ClassUserRepository;
import com.example.FinalSpringProject.repository.EtcInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/etcinfo")
@RequiredArgsConstructor
public class EtcInfoController {

    private final EtcInfoRepository etcInfoRepository;
    private final ClassUserRepository classUserRepository;

    @PostMapping
    public ResponseEntity<etcInfo> saveEtcInfo(@RequestBody EtcInfoForm form) {
        System.out.println("🔥 받은 classID: " + form.getClassID());

        ClassUser user = classUserRepository.findById(form.getClassID().longValue())
                .orElseThrow(() -> new RuntimeException("해당 classID의 유저를 찾을 수 없습니다."));

        etcInfo info = new etcInfo();
        info.setAuthOpinion(form.getAuthOpinion());
        info.setInterestJob(form.getInterestJob());
        info.setClassUser(user);

        return ResponseEntity.ok(etcInfoRepository.save(info));
    }


    @GetMapping("/{classID}")
    public ResponseEntity<etcInfo> getEtcInfo(@PathVariable Integer classID) {
        return ResponseEntity.ok(
                etcInfoRepository.findByClassUser_ClassID(classID.longValue())
                        .orElse(null)
        );
    }
}

