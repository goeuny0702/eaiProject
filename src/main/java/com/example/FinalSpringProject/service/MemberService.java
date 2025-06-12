package com.example.FinalSpringProject.service;

import com.example.FinalSpringProject.entity.Member;
import com.example.FinalSpringProject.form.MemberCreateForm;
import com.example.FinalSpringProject.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository mr;

    public void signup(MemberCreateForm form){
        if(mr.existsByUsername(form.getUsername())){
            throw new UsernameNotFoundException("아이디가 중복입니다!");
        }

        //비밀번호 확인은 여기서 하든 프론트에서 하든 알아서

        mr.save(Member.builder()
                .username(form.getUsername())
                .password(form.getPassword())
                .name(form.getName())
                .tel(form.getTel())
                .build());
        return;
    }
}
