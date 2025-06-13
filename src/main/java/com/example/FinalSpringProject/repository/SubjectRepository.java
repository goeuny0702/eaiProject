<<<<<<< HEAD
package com.example.FinalSpringProject.repository;

import com.example.FinalSpringProject.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Integer> {
    List<Subject> findByClassUser_ClassID(Integer classID);
}
=======
//package com.example.FinalSpringProject.repository;
//
//import com.example.FinalSpringProject.entity.Subject;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//@Repository
//public interface SubjectRepository extends JpaRepository<Subject, Long> {
//}
>>>>>>> db462cdee335a4b1bb73cecb0824d5e91f8215ab
