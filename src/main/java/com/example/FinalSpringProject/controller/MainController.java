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
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
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
        return "Edit";
    }

    @PostMapping("/Edit/{userID}/image")
    public String uploadPhoto(@PathVariable String userID,
                              @RequestParam("photo") MultipartFile photo) throws IOException {

        ClassUser user = classUserRepository.findByUserID(userID);
        if (user == null) {
            throw new IllegalArgumentException("사용자 없음");
        }

        if (!photo.isEmpty()) {

            // 기존 파일 있으면 삭제
            if (user.getPhotoPath() != null && !user.getPhotoPath().isEmpty()) {
                String oldFileName = user.getPhotoPath().replace("/image/", "");
                File oldFile = new File(new File("").getAbsolutePath() + "/src/main/resources/static/image/" + oldFileName);
                if (oldFile.exists()) oldFile.delete();
            }

            // 새 파일명은 항상 png로 저장
            String filename = UUID.randomUUID() + ".png";
            String uploadPath = new File("").getAbsolutePath() + "/src/main/resources/static/image/";
            File folder = new File(uploadPath);
            if (!folder.exists()) folder.mkdirs();

            // 이미지 → png 변환 저장
            BufferedImage image = ImageIO.read(photo.getInputStream());
            ImageIO.write(image, "png", new File(uploadPath + filename));

            // DB에 경로 저장
            user.setPhotoPath("/image/" + filename);
            classUserRepository.save(user);
        }

        return "redirect:/Edit/" + userID;
    }

    @PostMapping("/Edit/{userID}/delete-photo")
    public String deletePhoto(@PathVariable String userID) {
        ClassUser user = classUserRepository.findByUserID(userID);
        if (user == null) {
            throw new IllegalArgumentException("사용자 없음");
        }

        // 실제 파일 삭제
        if (user.getPhotoPath() != null && !user.getPhotoPath().isEmpty()) {
            String filename = user.getPhotoPath().replace("/image/", "");
            File file = new File(new File("").getAbsolutePath() + "/src/main/resources/static/image/" + filename);
            if (file.exists()) file.delete();
        }

        // 경로 비움
        user.setPhotoPath("");
        classUserRepository.save(user);

        return "redirect:/Edit/" + userID;
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