package com.bit.repo;

import com.bit.model.SchoolYear;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author ykeskin
 * @since 4/19/2021
 */
public interface SchoolYearRepo extends JpaRepository<SchoolYear, Integer> {
    SchoolYear findByValue(String value);
}
