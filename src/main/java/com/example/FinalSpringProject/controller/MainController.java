package com.example.FinalSpringProject.controller;
import com.example.FinalSpringProject.DTO.SubjectDTO;
import com.example.FinalSpringProject.entity.ClassUser;
import com.example.FinalSpringProject.entity.Subject;
import com.example.FinalSpringProject.form.ClassUserCreateForm;
import com.example.FinalSpringProject.repository.ClassUserRepository;
import com.example.FinalSpringProject.repository.SubjectRepository;
import com.example.FinalSpringProject.service.ClassUserService;
import jakarta.servlet.http.HttpSession;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.util.UUID;
import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

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
        session.setAttribute("isAdmin", user.getUserAuthority() != null && user.getUserAuthority() == 1);

        // 관리자면 관리자 페이지로
        if (user.getUserAuthority() != null && user.getUserAuthority() == 1) {
            return "redirect:/admin/login";
        }

        // 일반 유저는 메인으로
        return "redirect:/main";
    }


    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();  // 세션 전체 삭제
        return "redirect:/main";   // 홈으로 이동
    }

    @GetMapping("/signin")
    public String showSigninPage() {
        return "signin";
    }

    @GetMapping("/main")
    public String showMainPage() {
        return "main";
    }

    @Autowired
    private ClassUserRepository classUserRepository;

    @GetMapping("/LifeRecord")
    @Transactional
    public String lifeRecordPage(HttpSession session, Model model) {
        Boolean isAdmin = (Boolean) session.getAttribute("isAdmin");
        if (isAdmin == null || !isAdmin) {
            return "redirect:/";
        }

        List<ClassUser> userList = classUserRepository.findAll();
        userList.forEach(user -> {
            try {
                if (user.getEtcInfo() != null) {
                    System.out.println("의견: " + user.getEtcInfo().getAuthOpinion());
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        });


        model.addAttribute("userList", userList);
        return "LifeRecord";
    }


    @GetMapping("/Edit/{userID}")
    public String showEditPage(@PathVariable String userID, Model model) {
        ClassUser user = classUserRepository.findByUserID(userID);
        if (user == null) {
            throw new IllegalArgumentException("사용자 없음");
        }
        model.addAttribute("user", user);
        return "Edit";  // templates/Edit.html
    }

    @PostMapping("/Edit/{userID}/image")
    public String uploadPhoto(@PathVariable String userID,
                              @RequestParam("photo") MultipartFile photo) throws IOException {

        ClassUser user = classUserRepository.findByUserID(userID);
        if (user == null) {
            throw new IllegalArgumentException("사용자 없음");
        }
        if (!photo.isEmpty()) {

            String originalFilename = photo.getOriginalFilename();
            String extension = originalFilename.substring(originalFilename.lastIndexOf(".") + 1).toLowerCase();
            String filename = UUID.randomUUID() + "." + extension;


            // 💡 저장 위치도 배포 고려해서 변경 권장
            String uploadPath = new File("").getAbsolutePath() + "/src/main/resources/static/image/";
            File folder = new File(uploadPath);
            if (!folder.exists()) folder.mkdirs();

            File saveFile = new File(uploadPath + filename);
            photo.transferTo(saveFile);

            user.setPhotoPath("/image/" + filename);
            classUserRepository.save(user);
        }

        return "redirect:/Edit/" + user.getUserID();
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


    @GetMapping("/community")
    public String showCommunityPage() {
        return "community";
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