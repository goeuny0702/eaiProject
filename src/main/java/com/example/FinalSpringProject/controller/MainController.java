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

@Controller
class Calendar{
    @GetMapping("/Calendar")
    public String showCalendarPage() {
        return "Calendar"; // 이거 넣음 templates/calendar.html
    }
}

@Controller
class admissionform{
    @GetMapping("/admission-form")
    public String showadmissionformPage() {
        return "admission-form"; // 이거 넣음 templates/calendar.html
    }
}

@Controller
class Course{
    @GetMapping("/Course")
    public String showCalendarPage() {
        return "Course";

class viewDetails{
    @GetMapping("/view-Details")
    public String showviewDetailsPage() {
        return "view-Details";

    }
}