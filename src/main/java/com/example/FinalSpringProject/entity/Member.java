package com.example.FinalSpringProject.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "subject_id", nullable = true)
    private Subject subject;
    private String username;
    private String password;
    private String tel;
    private String email;
    private String bank;
    private String account;
    private String personnum;
    private String job;
    private String gender;
    private String name;
}
