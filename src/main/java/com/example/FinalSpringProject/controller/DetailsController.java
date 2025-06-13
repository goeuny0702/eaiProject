package com.example.FinalSpringProject.controller;

import com.example.FinalSpringProject.entity.Subject;
import com.example.FinalSpringProject.repository.SubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
public class DetailsController {

    private final SubjectRepository subjectRepository;

    // 상세 페이지에서 특정 과목의 정보 불러오기
    @GetMapping("/subject/view/{id}")
    public String viewSubject(@PathVariable Integer id, Model model) {
        // 해당 ID에 해당하는 과목 정보 찾기
        Subject subject = subjectRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 과정이 존재하지 않습니다: " + id));

        // 모델에 데이터를 담아 view-Details.html로 전달
        model.addAttribute("training", subject);

        return "view-Details";  // templates/view-Details.html 반환
    }
}
