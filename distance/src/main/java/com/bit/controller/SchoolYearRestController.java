package com.bit.controller;

import com.bit.model.SchoolYear;
import com.bit.repo.SchoolYearRepo;
import com.bit.services.AdminSettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * @author ykeskin
 * @since 4/19/2021
 */
@RestController
@CrossOrigin(origins = "*")
public class SchoolYearRestController {

    @Autowired
    private SchoolYearRepo schoolYearRepo;

    @Autowired
    private AdminSettingsService adminSettingsService;

    // TODO save only in the specified school year row
    // do not create new id or new row
    @PutMapping("/api/updateSettings")
    public ResponseEntity updateSettings(@Valid @RequestBody SchoolYear schoolYear) {
        adminSettingsService.updateAdminSettings(schoolYear);
        return new ResponseEntity(schoolYear, HttpStatus.CREATED);
    }

}
