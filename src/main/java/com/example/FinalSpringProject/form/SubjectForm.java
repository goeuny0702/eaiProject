package com.example.FinalSpringProject.form;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SubjectForm {
    private Integer classID;  // ClassUser의 FK
    private String subjectTitle;
    private String subjectPeriod;
    private Integer subjectMax;
    private Integer subjectCost;
}
