package com.bit.services;

import com.bit.model.SchoolYear;
import com.bit.repo.SchoolYearRepo;
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
    private SchoolYearRepo schoolYearRepo;

    @Transactional
    public void updateAdminSettings(SchoolYear schoolYear) {

        SchoolYear schoolYearInfo = schoolYearRepo.findByValue(schoolYear.getValue());
        schoolYearInfo.setMessage1(schoolYear.getMessage1());
        schoolYearInfo.setMessage2(schoolYear.getMessage2());
        schoolYearInfo.setMessage3(schoolYear.getMessage3());
        System.out.println("SchoolyearInfo: " + schoolYearInfo);

        schoolYearRepo.save(schoolYearInfo);
    }
}
