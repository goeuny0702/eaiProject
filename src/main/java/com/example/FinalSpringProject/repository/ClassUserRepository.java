package com.example.FinalSpringProject.repository;

import com.example.FinalSpringProject.entity.ClassUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClassUserRepository extends JpaRepository<ClassUser, Long> {
    ClassUser findByUserID(String userID);
}
