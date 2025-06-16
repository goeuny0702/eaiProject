package com.example.FinalSpringProject.controller;

import com.example.FinalSpringProject.entity.Attend;
import com.example.FinalSpringProject.repository.AttendRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class AttendanceController {

    private final AttendRepository attendRepository;

    @GetMapping("/api/attendance/{classId}")
    public ResponseEntity<Map<String, Object>> getAttendance(@PathVariable Long classId) {
        // 전체 출석/결석 시간 계산
        List<Attend> records = attendRepository.findByClassUser_ClassID(classId);

        int totalAttend = 0;
        int totalAbsent = 0;

        for (Attend record : records) {
            totalAttend += record.getAttendTime();
            totalAbsent += record.getAbsenceTime();
        }

        int total = totalAttend + totalAbsent;
        int rate = (total == 0) ? 0 : (int) Math.round((double) totalAttend / total * 100);

        // 응답
        Map<String, Object> result = new HashMap<>();
        result.put("attendanceRate", rate);

        return ResponseEntity.ok(result);
    }
}
