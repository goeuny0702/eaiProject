//package com.example.FinalSpringProject.entity;
//
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//
//import java.util.List;
//
//@Entity
//@Getter
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
//public class Subject {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @OneToMany(mappedBy = "subject")
//    private List<Member> students;
//    private String teacher;
//    private String name;
//    private String maxperson;
//    private String price;
//    private String period;
//}