package com.example.FinalSpringProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;  // Model import 꼭 필요
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class adminController {

    @GetMapping("/login") // localhost:8080/admin/login
    public String showAdminPage(Model model) {
        model.addAttribute("isAdminPage", true);
        return "admin";
    }
}
