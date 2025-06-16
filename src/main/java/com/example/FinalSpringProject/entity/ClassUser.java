package com.example.FinalSpringProject.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
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

    private Integer userAuthority = 0;  // 기본값 일반 사용자

    private String userEmail;
    private Boolean userGender;

    @OneToOne(mappedBy = "classUser", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private Bank bank;

    @OneToOne(mappedBy = "classUser", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonManagedReference
    private etcInfo etcInfo;


}
