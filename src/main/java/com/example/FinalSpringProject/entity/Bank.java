package com.example.FinalSpringProject.entity;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Bank")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"classUser"}) // ✅ 무한순환 방지
public class Bank {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bankID;

    @OneToOne
    @JoinColumn(name = "classID")
    private ClassUser classUser;

    private String bankName;
    private String bankAddress;
    private String bankOwner;
}

