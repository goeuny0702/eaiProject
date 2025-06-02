package com.example.FinalSpringProject.repository;

import com.example.FinalSpringProject.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
