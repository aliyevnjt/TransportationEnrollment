package com.bit.repo;

import com.bit.model.AdminSettings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author ykeskin
 * @since 4/19/2021
 */
@Repository
public interface AdminSettingsRepo extends JpaRepository<AdminSettings, Integer> {
    AdminSettings findByAdminYear(String adminYear);
}
