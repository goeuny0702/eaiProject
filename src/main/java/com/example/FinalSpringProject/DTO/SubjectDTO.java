package com.example.FinalSpringProject.DTO;

import com.example.FinalSpringProject.entity.Subject;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SubjectDTO {
    private Integer subjectID;
    private String subjectTitle;
    private String subjectPeriod;
    private Integer subjectMax;
    private Integer subjectCost;

    public static SubjectDTO fromEntity(Subject s) {
        return SubjectDTO.builder()
                .subjectID(s.getSubjectID())
                .subjectTitle(s.getSubjectTitle())
                .subjectPeriod(s.getSubjectPeriod())
                .subjectMax(s.getSubjectMax())
                .subjectCost(s.getSubjectCost())
                .build();
    }
}
