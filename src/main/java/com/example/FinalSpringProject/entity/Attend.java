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

    @ManyToOne
    @JoinColumn(name = "classID", nullable = false)
    private ClassUser classUser;
}
