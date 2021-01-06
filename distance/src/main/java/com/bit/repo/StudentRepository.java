package com.bit.repo;

import com.bit.model.StudentInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<StudentInfo, Long> {

}
