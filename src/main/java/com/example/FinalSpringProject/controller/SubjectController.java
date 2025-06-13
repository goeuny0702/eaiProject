package com.example.FinalSpringProject.controller;

import com.example.FinalSpringProject.entity.Subject;
import com.example.FinalSpringProject.repository.SubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class SubjectController {

    private final SubjectRepository subjectRepository;

    // 모든 과정 목록을 JSON 형식으로 반환
    @GetMapping("/subjects")
    public List<Subject> getSubjects() {
        return subjectRepository.findAll();
    }

    // 특정 과정 조회 (JSON 형식으로 반환)
    @GetMapping("/subject/{id}")
    public Subject getSubjectById(@PathVariable Integer id) {
        return subjectRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 ID의 과정이 없습니다: " + id));
    }
}
