package com.example.FinalSpringProject.controller;

import com.example.FinalSpringProject.entity.Bank;
import com.example.FinalSpringProject.entity.ClassUser;
import com.example.FinalSpringProject.form.BankForm;
import com.example.FinalSpringProject.repository.BankRepository;
import com.example.FinalSpringProject.repository.ClassUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/bank")
public class BankController {

    private final BankRepository bankRepository;
    private final ClassUserRepository classUserRepository;

    // BankForm을 통해 은행 정보 저장
    @PostMapping
    public ResponseEntity<Bank> saveBank(@RequestBody BankForm form) {
        System.out.println("받은 form 데이터: " + form);
        System.out.println("classID 확인: " + form.getClassId());

        // classUser 조회
        ClassUser user = classUserRepository.findById(Long.valueOf(form.getClassId()))
                .orElseThrow(() -> new RuntimeException("해당 classID의 유저를 찾을 수 없습니다."));

        // 기존 Bank 조회
        Bank bank = bankRepository.findByClassUser(user)
                .orElseGet(() -> {
                    Bank newBank = new Bank();
                    newBank.setClassUser(user);
                    return newBank;
                });

        // 폼 데이터로 덮어쓰기
        bank.setBankName(form.getBankName());
        bank.setBankAddress(form.getBankAddress());
        bank.setBankOwner(form.getBankOwner());

        return ResponseEntity.ok(bankRepository.save(bank));
    }



    // 기존 저장된 은행 정보 불러오기
    @GetMapping("/{id}")
    public Bank getBank(@PathVariable Integer id) {
        return bankRepository.findById(id).orElse(null);
    }
}
