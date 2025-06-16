package com.example.FinalSpringProject.repository;

import com.example.FinalSpringProject.entity.etcInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EtcInfoRepository extends JpaRepository<etcInfo, Long> {
    Optional<etcInfo> findByClassUser_ClassID(Long classID);

}
