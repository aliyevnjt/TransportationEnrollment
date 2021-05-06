package com.bit.repo;

import com.bit.model.form_data.Schools;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SchoolNamesRepository extends JpaRepository<Schools, Long> {

}
