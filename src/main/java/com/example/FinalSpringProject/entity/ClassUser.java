package com.example.FinalSpringProject.entity;

import jakarta.persistence.*;
import lombok.*;

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

    @Builder.Default
    private Boolean userAuthority = false;
    private String userEmail;
    private Boolean userGender;

    // 양방향 연결: Bank
    @OneToOne(mappedBy = "classUser", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Bank bank;

    // 양방향 연결: EtcInfo
//    @OneToOne(mappedBy = "classUser", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private EtcInfo etcInfo;
}
