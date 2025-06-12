package com.example.FinalSpringProject.controller;

import com.example.FinalSpringProject.form.MemberCreateForm;
import com.example.FinalSpringProject.service.MemberService;
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

    private final MemberService ms;

    @GetMapping("/main")
    public String showMainPage() {
        return "main"; // resources/templates/main.html
    }
    @GetMapping("/signin")
    public String showSignInPage() {
        return "signin";
    }
    @PostMapping("/signin")
    public String postSignInPage(@ModelAttribute("signin")LoginForm form) {
        return "signin";
    }

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
        return "Calendar"; // 이거 넣음 templates/calendar.html
    }
    @GetMapping("/admission-form")
    public String showadmissionformPage() {
        return "admission-form"; // 이거 넣음 templates/calendar.html
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

    @PostMapping
    public String postSignup(@ModelAttribute("signup")MemberCreateForm form){
        ms.signup(form);
    }
}