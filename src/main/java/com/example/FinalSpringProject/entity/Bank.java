package com.example.FinalSpringProject.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Bank")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
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
