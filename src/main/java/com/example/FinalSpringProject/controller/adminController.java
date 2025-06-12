package com.example.FinalSpringProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class adminController {
    @GetMapping("/login")//localhost:8080/admin/login
    public String showAdminPage() {return "admin";}
}
