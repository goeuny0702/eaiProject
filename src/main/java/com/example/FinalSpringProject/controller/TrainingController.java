package com.example.FinalSpringProject.controller;

import com.example.FinalSpringProject.service.TrainingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class TrainingController {

    private final TrainingService trainingService;

    @GetMapping("/import-trainings")
    public String importTrainings() {
        trainingService.fetchAndSaveTrainings();
        return "훈련 데이터 저장 완료";
    }
}
