package com.example.FinalSpringProject.service;

import com.example.FinalSpringProject.form.AttendForm;
import com.example.FinalSpringProject.entity.Attend;
import com.example.FinalSpringProject.entity.ClassUser;
import com.example.FinalSpringProject.repository.AttendRepository;
import com.example.FinalSpringProject.repository.ClassUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AttendService {

    private final AttendRepository attendRepository;
    private final ClassUserRepository classUserRepository;

    public void save(AttendForm form) {
        ClassUser classUser = classUserRepository.findById(form.getClassID())
                .orElseThrow(() -> new IllegalArgumentException("해당 유저(classID)가 존재하지 않습니다."));

        Attend attend = Attend.builder()
                .classUser(classUser)
                .attendTime(form.getAttendTime())
                .absenceTime(form.getAbsenceTime())
                .build();

        attendRepository.save(attend);
    }
}
