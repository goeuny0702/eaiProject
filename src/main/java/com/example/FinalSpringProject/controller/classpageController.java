package com.example.FinalSpringProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class classpageController {
    @GetMapping("/ClassPage")
    public String showClassPage() {
        return "ClassPage";
    }
}
