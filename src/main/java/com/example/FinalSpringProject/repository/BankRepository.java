package com.example.FinalSpringProject.repository;

import com.example.FinalSpringProject.entity.Bank;
import com.example.FinalSpringProject.entity.ClassUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BankRepository extends JpaRepository<Bank, Integer> {

    Optional<Bank> findByClassUser_ClassID(Long classId);


}
