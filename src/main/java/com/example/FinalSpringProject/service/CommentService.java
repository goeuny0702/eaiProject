package com.example.FinalSpringProject.service;

import com.example.FinalSpringProject.entity.ClassUser;
import com.example.FinalSpringProject.entity.Comment;
import com.example.FinalSpringProject.repository.ClassUserRepository;
import com.example.FinalSpringProject.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final ClassUserRepository classUserRepository;

    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    public void saveComment(String content, String userId) {
        System.out.println(">>> 댓글 저장 요청 by userId = " + userId + ", content = " + content);

        ClassUser user = classUserRepository.findByUserID(userId);
        if (user == null) {
            throw new RuntimeException("사용자 정보 없음");
        }
        Comment comment = Comment.builder()
                .content(content)
                .author(user)
                .build();

        commentRepository.save(comment);

        System.out.println(">>> 댓글 저장 완료");
    }

    public void deleteComment(Long commentId, String userId) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new RuntimeException("댓글 없음"));

        if (!comment.getAuthor().getUserID().equals(userId)) {
            throw new RuntimeException("삭제 권한 없음");
        }

        commentRepository.delete(comment);
    }
}