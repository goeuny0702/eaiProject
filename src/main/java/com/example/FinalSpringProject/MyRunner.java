//package com.example.FinalSpringProject;
//
//import com.example.FinalSpringProject.entity.User;
//import com.example.FinalSpringProject.repository.UserRepository;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//import org.springframework.stereotype.Component;
//
//@Component
//public class MyRunner {
//
//    @Bean
//    CommandLineRunner run(UserRepository userRepository) {
//        return args -> {
//            User user = new User();
//            user.setName("홍길동");
//            userRepository.save(user);
//        };
//    }
//
//}
