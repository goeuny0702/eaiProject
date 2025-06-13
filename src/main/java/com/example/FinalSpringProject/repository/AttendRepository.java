package com.example.FinalSpringProject.repository;

import com.example.FinalSpringProject.entity.Attend;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AttendRepository extends JpaRepository<Attend, Integer> {
    List<Attend> findByClassUser_ClassID(Integer classID); // 유저별 출석 조회
}
