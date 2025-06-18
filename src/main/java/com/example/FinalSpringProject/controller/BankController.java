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

    // 은행 정보 저장 (POST)
    @PostMapping
    public ResponseEntity<Bank> saveBank(@RequestBody BankForm form) {
        System.out.println("받은 form 데이터: " + form);
        System.out.println("classID 확인: " + form.getClassId());

        ClassUser user = classUserRepository.findById(Long.valueOf(form.getClassId()))
                .orElseThrow(() -> new RuntimeException("해당 classID의 유저를 찾을 수 없습니다."));

        Bank bank = bankRepository.findByClassUser_ClassID(user.getClassID())
                .orElseGet(() -> {
                    Bank newBank = new Bank();
                    newBank.setClassUser(user);
                    return newBank;
                });


        bank.setBankName(form.getBankName());
        bank.setBankAddress(form.getBankAddress());
        bank.setBankOwner(form.getBankOwner());

        return ResponseEntity.ok(bankRepository.save(bank));
    }

    // classID 기준으로 유저의 은행 정보 조회 (GET)
    @GetMapping("/{classId}")
    public ResponseEntity<Bank> getBankByClassId(@PathVariable Long classId) {
        return bankRepository.findByClassUser_ClassID(classId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}

