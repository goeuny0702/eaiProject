package com.example.FinalSpringProject.repository;

import com.example.FinalSpringProject.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
