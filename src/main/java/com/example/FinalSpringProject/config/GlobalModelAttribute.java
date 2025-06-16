package com.example.FinalSpringProject.config;

import com.example.FinalSpringProject.entity.ClassUser;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

@ControllerAdvice
public class GlobalModelAttribute {

    @ModelAttribute("userAuthority")
    public int userAuthority(HttpSession session) {
        ClassUser user = (ClassUser) session.getAttribute("loggedInUser");
        if (user != null && user.getUserAuthority() != null) {
            return user.getUserAuthority(); // 1 = 관리자, 0 = 학생
        }
        return -1; // 비로그인
    }


}

