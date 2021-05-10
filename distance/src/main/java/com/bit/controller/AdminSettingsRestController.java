package com.bit.controller;

import com.bit.model.AdminSettings;
import com.bit.repo.AdminSettingsRepo;
import com.bit.services.AdminSettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * @author ykeskin
 * @since 4/19/2021
 */
@RestController
@CrossOrigin(origins = "*")
public class AdminSettingsRestController {

    @Autowired
    private AdminSettingsRepo adminSettingsRepo;

    @Autowired
    private AdminSettingsService adminSettingsService;

    @GetMapping("/api/adminSettings")
    public ResponseEntity getMessages() {
        return new ResponseEntity(adminSettingsRepo.findAll(), HttpStatus.OK);
    }

    @PutMapping("/api/updateSettings")
    public ResponseEntity updateSettings(@Valid @RequestBody AdminSettings adminSettings) {
        adminSettingsService.updateAdminSettings(adminSettings);
        return new ResponseEntity(adminSettings, HttpStatus.CREATED);
    }


}
