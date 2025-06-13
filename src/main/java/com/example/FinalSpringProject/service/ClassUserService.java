package com.example.FinalSpringProject.service;

import com.example.FinalSpringProject.entity.ClassUser;
import com.example.FinalSpringProject.repository.ClassUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClassUserService {
    private final ClassUserRepository classUserRepository;

    public ClassUser save(ClassUser classUser) {
        return classUserRepository.save(classUser);
    }

    public List<ClassUser> findAll() {
        return classUserRepository.findAll();
    }

    public ClassUser findById(Long id) {
        return classUserRepository.findById(id).orElse(null);
    }
}
