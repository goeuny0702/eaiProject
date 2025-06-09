package com.example.FinalSpringProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/main")
    public String showMainPage() {
        return "main"; // resources/templates/main.html
    }
}

@Controller
class LifeRecordController {

        @GetMapping("/LifeRecord")
    public String showLifeRecordPage() {
        return "LifeRecord";
    }
}


@Controller
class Edit {

    @GetMapping("/Edit")
    public String showEditPage() {
        return "Edit";
    }
}