package com.bit.services;

import com.bit.model.AdminSettings;
import com.bit.repo.AdminSettingsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


/**
 * @author ykeskin
 * @since 4/23/2021
 */
@Service
public class AdminSettingsService {

    @Autowired
    private AdminSettingsRepo adminSettingsRepo;

    @Transactional
    public void updateAdminSettings(AdminSettings adminSettings) {

        AdminSettings adminSettingsInfo = adminSettingsRepo.findByAdminYear(adminSettings.getAdminYear());
        adminSettingsInfo.setRegStatus(adminSettings.getRegStatus());
        adminSettingsInfo.setOpenMessage(adminSettings.getOpenMessage());
        adminSettingsInfo.setClosedMessage(adminSettings.getClosedMessage());
        adminSettingsInfo.setNotification1(adminSettings.getNotification1());
        System.out.println("SchoolyearInfo: " + adminSettingsInfo);

        adminSettingsRepo.save(adminSettingsInfo);
    }
}
