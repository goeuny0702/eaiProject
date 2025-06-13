package com.example.FinalSpringProject.controller;
import com.example.FinalSpringProject.entity.ClassUser;
import com.example.FinalSpringProject.form.ClassUserCreateForm;
import com.example.FinalSpringProject.service.ClassUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
@RequiredArgsConstructor
public class MainController {
    private final ClassUserService classUserService;

    @PostMapping("/signin")
    public String registerUser(@ModelAttribute ClassUserCreateForm form) {
        ClassUser user = ClassUser.builder()
                .userID(form.getUserID())
                .userPW(form.getUserPW())
                .userName(form.getUserName())
                .userTel(form.getUserTel())
                .build();

        classUserService.save(user);
        return "redirect:/main";
    }

    @GetMapping("/main")
    public String showMainPage() { return "main"; }

    @GetMapping("/LifeRecord")
    public String showLifeRecordPage() {
        return "LifeRecord";
    }

    @GetMapping("/Edit")
    public String showEditPage() {
        return "Edit";
    }

    @GetMapping("/Calendar")
    public String showCalendarPage() {
        return "Calendar";
    }
    @GetMapping("/admission-form")
    public String showadmissionformPage() {
        return "admission-form";
    }
    @GetMapping("/Course")
    public String showCoursePage() {
        return "Course";
    }
    @GetMapping("/view-Details")
    public String showviewDetailsPage() {
        return "view-Details";
    }
    @GetMapping("/login")
    public String showLoginPage() {
        return "login";
    }

}