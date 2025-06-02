package com.example.FinalSpringProject.controller;

import com.example.FinalSpringProject.entity.User;
import com.example.FinalSpringProject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public String listUsers(Model model) {
        List<User> users = userRepository.findAll(); // 모든 사용자 가져오기
        model.addAttribute("users", users); // 모델에 담기
        return "user-list"; // user-list.html로 이동
    }
}
