package com.example.FinalSpringProject.service;

import com.example.FinalSpringProject.entity.ClassUser;
import com.example.FinalSpringProject.repository.ClassUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ClassUserService {
    private final ClassUserRepository classUserRepository;

    public ClassUser save(ClassUser classUser) {
        return classUserRepository.save(classUser);
    }

    public ClassUser findByUserID(String userID) {
        return classUserRepository.findByUserID(userID);
    }

    public String login(String userID, String userPW) {
        ClassUser user = classUserRepository.findByUserID(userID);

        if (user == null) {
            return "아이디가 틀립니다";
        }

        if (user.getUserPW() == null || !user.getUserPW().equals(userPW)) {
            return "비밀번호가 틀립니다";
        }
        return "success";
    }

}
