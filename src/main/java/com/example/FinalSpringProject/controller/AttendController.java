package com.example.FinalSpringProject.controller;

import com.example.FinalSpringProject.entity.Attend;
import com.example.FinalSpringProject.repository.AttendRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AttendController {

    private final AttendRepository attendRepository;

    // 특정 classID에 대한 출석률 계산 및 반환
    @GetMapping("/attendance/{classID}")
    public Map<String, Object> getAttendanceRate(@PathVariable Integer classID) {
        List<Attend> attendList = attendRepository.findByClassUser_ClassID(classID);

        int totalAttend = 0;
        int totalAbsent = 0;

        for (Attend attend : attendList) {
            totalAttend += (attend.getAttendTime() != null) ? attend.getAttendTime() : 0;
            totalAbsent += (attend.getAbsenceTime() != null) ? attend.getAbsenceTime() : 0;
        }

        int total = totalAttend + totalAbsent;
        double attendanceRate = (total == 0) ? 0.0 : ((double) totalAttend / total) * 100.0;

        Map<String, Object> response = new HashMap<>();
        response.put("classID", classID);
        response.put("attendanceRate", Math.round(attendanceRate));

        return response;
    }
}
