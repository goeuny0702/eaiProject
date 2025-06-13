package com.example.FinalSpringProject.repository;

import com.example.FinalSpringProject.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Integer> {
    List<Subject> findByClassUser_ClassID(Integer classID);
}
