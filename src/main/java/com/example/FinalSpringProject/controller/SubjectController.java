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

    @GetMapping("/subjects")
    public List<Subject> getSubjects() {
        return subjectRepository.findAll();
    }
}
