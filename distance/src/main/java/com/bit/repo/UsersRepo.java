package com.bit.repo;

import com.bit.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author ykeskin
 * @since 5/2/2021
 */
@Repository
public interface UsersRepo extends JpaRepository<Users, Integer> {
    List<Users> findByDistrict(String districtName);
}
