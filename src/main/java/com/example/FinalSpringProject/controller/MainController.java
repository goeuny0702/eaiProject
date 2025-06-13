package com.example.FinalSpringProject.controller;
import com.example.FinalSpringProject.entity.ClassUser;
import com.example.FinalSpringProject.form.ClassUserCreateForm;
import com.example.FinalSpringProject.service.ClassUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

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

    @PostMapping("/login")
    public String login(@RequestParam String userID,
                        @RequestParam String userPW,
                        RedirectAttributes redirectAttributes) {

        String result = classUserService.login(userID, userPW);

        if (result.equals("아이디가 틀립니다")) {
            redirectAttributes.addFlashAttribute("errorMessage", "존재하지 않는 아이디입니다.");
            return "redirect:/login";
        }

        if (result.equals("비밀번호가 틀립니다")) {
            redirectAttributes.addFlashAttribute("errorMessage", "비밀번호가 틀렸습니다.");
            return "redirect:/login";
        }

        // 로그인 성공
        return "redirect:/main";
    }

    @GetMapping("/signin")
    public String showSigninPage() { return "signin"; }

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