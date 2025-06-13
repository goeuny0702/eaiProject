package com.example.FinalSpringProject.entity;

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

//    @OneToOne
//    @JoinColumn(name = "classID", referencedColumnName = "classID")
    private Integer classID;

    @Lob
    private String authOpinion;

    @Lob
    private String interestJob;
}
