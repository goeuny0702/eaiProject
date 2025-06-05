package com.example.FinalSpringProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class signinController {

    @GetMapping("/signin")
    public String showMainPage() {
        return "signin";
    }
}
