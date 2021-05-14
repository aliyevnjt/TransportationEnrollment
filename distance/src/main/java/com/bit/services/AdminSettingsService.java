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
        adminSettingsInfo.setNotification2(adminSettings.getNotification2());
        adminSettingsInfo.setNotification1Status(adminSettings.getNotification1Status());
        adminSettingsInfo.setNotification2Status(adminSettings.getNotification2Status());
        adminSettingsInfo.setBusFee(adminSettings.getBusFee());
        adminSettingsInfo.setBusFeeFamilyMax(adminSettings.getBusFeeFamilyMax());
        System.out.println("adminSettingsInfo: " + adminSettingsInfo);

        adminSettingsRepo.save(adminSettingsInfo);
    }
}
