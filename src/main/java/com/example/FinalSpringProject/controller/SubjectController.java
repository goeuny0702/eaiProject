package com.example.FinalSpringProject.controller;

import com.example.FinalSpringProject.DTO.SubjectDTO;
import com.example.FinalSpringProject.repository.SubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class SubjectController {

    private final SubjectRepository subjectRepository;

    @GetMapping("/subjects")
    public List<SubjectDTO> getSubjects() {
        return subjectRepository.findAll()
                .stream()
                .map(SubjectDTO::fromEntity)
                .toList();
    }
}