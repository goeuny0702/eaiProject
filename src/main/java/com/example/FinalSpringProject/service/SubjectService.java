package com.example.FinalSpringProject.service;

import com.example.FinalSpringProject.form.SubjectForm;
import com.example.FinalSpringProject.entity.ClassUser;
import com.example.FinalSpringProject.entity.Subject;
import com.example.FinalSpringProject.repository.ClassUserRepository;
import com.example.FinalSpringProject.repository.SubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SubjectService {

    private final SubjectRepository subjectRepository;
    private final ClassUserRepository classUserRepository;

    public void createSubject(SubjectForm form) {

        // classID를 가진 ClassUser가 존재하는지 검증
        ClassUser classUser = classUserRepository.findById((long)form.getClassID())
                .orElseThrow(() -> new IllegalArgumentException("해당 유저(classID)를 찾을 수 없습니다."));

        // 엔티티 생성 및 저장
        Subject subject = Subject.builder()
                .classUser(classUser)
                .subjectTitle(form.getSubjectTitle())
                .subjectPeriod(form.getSubjectPeriod())
                .subjectMax(form.getSubjectMax())
                .subjectCost(form.getSubjectCost())
                .build();

        subjectRepository.save(subject);
    }
}
