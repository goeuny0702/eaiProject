package com.example.FinalSpringProject.form;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AttendForm {

    private Integer classID;       // FK
    private Integer attendTime;    // 출석 일수
    private Integer absenceTime;   // 결석 일수
}
