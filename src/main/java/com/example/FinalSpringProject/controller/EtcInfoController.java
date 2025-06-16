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
    public ResponseEntity<etcInfo> saveOrUpdateEtcInfo(@RequestBody EtcInfoForm form) {
        System.out.println("받은 classID: " + form.getClassID());

        Long classID = form.getClassID().longValue();

        // 1. classUser 가져오기
        ClassUser user = classUserRepository.findById(classID)
                .orElseThrow(() -> new RuntimeException("해당 classID의 유저를 찾을 수 없습니다."));

        // 2. 기존 etcInfo가 있는지 확인
        etcInfo info = etcInfoRepository.findByClassUser_ClassID(classID)
                .orElse(new etcInfo()); // 없으면 새로 생성

        // 3. 값 세팅
        info.setAuthOpinion(form.getAuthOpinion());
        info.setInterestJob(form.getInterestJob());
        info.setClassUser(user); // 중요: 새 객체인 경우 꼭 설정

        // 4. 저장 (update 또는 insert 자동으로 처리됨)
        etcInfo saved = etcInfoRepository.save(info);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/{classID}")
    public ResponseEntity<etcInfo> getEtcInfo(@PathVariable Integer classID) {
        return ResponseEntity.ok(
                etcInfoRepository.findByClassUser_ClassID(classID.longValue())
                        .orElse(null)
        );
    }
}


