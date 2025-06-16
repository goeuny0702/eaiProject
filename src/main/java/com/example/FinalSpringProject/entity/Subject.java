package com.example.FinalSpringProject.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Subject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer subjectID;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "classID", nullable = false)
    private ClassUser classUser;

    private String subjectTitle;
    private String subjectPeriod;
    private Integer subjectMax;
    private Integer subjectCost;
}
