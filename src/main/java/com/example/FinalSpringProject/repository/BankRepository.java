package com.example.FinalSpringProject.repository;

import com.example.FinalSpringProject.entity.Bank;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankRepository extends JpaRepository<Bank, Integer> {
}
