package com.example.FinalSpringProject.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "training")
@Data
public class Training {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String telNo;
    private String address;
    private String subTitle;
}
