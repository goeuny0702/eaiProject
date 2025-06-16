package com.example.FinalSpringProject.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "etcInfo")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class etcInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer etcInfoID;

    @OneToOne
    @JoinColumn(name = "classID")
    @JsonBackReference
    private ClassUser classUser;

    @Lob
    private String authOpinion;

    @Lob
    private String interestJob;
}
