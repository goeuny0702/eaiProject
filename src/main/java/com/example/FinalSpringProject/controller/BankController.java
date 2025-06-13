package com.example.FinalSpringProject.controller;

import com.example.FinalSpringProject.entity.Bank;
import com.example.FinalSpringProject.repository.BankRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/bank")
public class BankController {

    private final BankRepository bankRepository;

    @PostMapping
    public Bank saveBank(@RequestBody Bank bank) {
        return bankRepository.save(bank);
    }

    @GetMapping("/{id}")
    public Bank getBank(@PathVariable Integer id) {
        return bankRepository.findById(id).orElse(null);
    }
}
