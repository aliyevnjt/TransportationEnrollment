package com.bit.repo;

import com.bit.model.SchoolYear;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author ykeskin
 * @since 4/19/2021
 */
@Repository
public interface SchoolYearRepo extends JpaRepository<SchoolYear, Integer> {
    SchoolYear findByValue(String value);
}
