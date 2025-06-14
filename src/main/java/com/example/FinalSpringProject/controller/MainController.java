package com.example.FinalSpringProject.controller;
import com.example.FinalSpringProject.entity.ClassUser;
import com.example.FinalSpringProject.entity.Subject;
import com.example.FinalSpringProject.form.ClassUserCreateForm;
import com.example.FinalSpringProject.repository.SubjectRepository;
import com.example.FinalSpringProject.service.ClassUserService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
                        HttpSession session,
                        RedirectAttributes redirectAttributes) {

        ClassUser user = classUserService.login(userID, userPW);

        if (user == null) {
            redirectAttributes.addFlashAttribute("errorMessage", "아이디 또는 비밀번호가 틀렸습니다.");
            return "redirect:/login";
        }

        session.setAttribute("loggedInUser", user);

        if (Boolean.TRUE.equals(user.getUserAuthority())) {
            return "redirect:/admin/login";
        }

        return "redirect:/main";
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();  // 세션 전체 삭제
        return "redirect:/main";   // 홈으로 이동
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

    private final SubjectRepository subjectRepository;

    @GetMapping("/view-Details/{subjectID}")
    public String showDetails(@PathVariable Integer subjectID, Model model) {
        Subject subject = subjectRepository.findById(subjectID)
                .orElseThrow(() -> new IllegalArgumentException("Invalid subject ID: " + subjectID));

        model.addAttribute("training", subject);
        return "view-Details";
    }

    @GetMapping("/login")
    public String showLoginPage() {
        return "login";
    }

}