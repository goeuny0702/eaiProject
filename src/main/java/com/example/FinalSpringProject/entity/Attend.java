package com.example.FinalSpringProject.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Attend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer attendID;

    private Integer attendTime;
    private Integer absenceTime;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "classID", nullable = false)
    private ClassUser classUser;

    public double getAttendanceRate() {
        int attended = (attendTime != null) ? attendTime : 0;
        int absent = (absenceTime != null) ? absenceTime : 0;
        int total = attended + absent;
        return total == 0 ? 0.0 : (attended * 100.0) / total;
    }
}
