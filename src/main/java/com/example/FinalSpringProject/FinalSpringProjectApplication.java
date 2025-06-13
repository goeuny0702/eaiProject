package com.example.FinalSpringProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.example.FinalSpringProject.entity")
public class FinalSpringProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinalSpringProjectApplication.class, args);
	}

}