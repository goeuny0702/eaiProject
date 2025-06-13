package com.example.FinalSpringProject.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class ClassUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long classID;

    private String userID;
    private String userPW;
    private String userName;
    private String userTel;
    private String userAddress;
    private Boolean userAuthority;
    private String userEmail;
    private Boolean userGender;
}
