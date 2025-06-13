package com.example.FinalSpringProject.repository;

import com.example.FinalSpringProject.entity.ClassUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassUserRepository extends JpaRepository<ClassUser, Long> {
}
