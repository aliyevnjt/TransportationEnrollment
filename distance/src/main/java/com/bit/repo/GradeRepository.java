package com.bit.repo;

import com.bit.model.form_data.Grades;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GradeRepository extends JpaRepository<Grades, Long> {

}
