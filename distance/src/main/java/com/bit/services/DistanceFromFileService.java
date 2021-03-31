package com.bit.services;

import com.bit.model.StudentInfo;
import com.bit.model.form_data.AddresExcel;
import com.bit.repo.ExcelAddressRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DistanceFromFileService {
    @Autowired
    private ExcelAddressRepo excelAddressRepo;
    @Autowired
    private AddresExcel addresExcel;

    public List<StudentInfo> createStudents(List<StudentInfo> studentInfo){
        List<StudentInfo> responseStudentInfo = new ArrayList<>();
        double distance = 0;
        studentInfo.forEach(a -> {
            switch (a.getSchool().toLowerCase()) {
                case "lhs":
                a.setDistanceFromSchool(round(excelAddressRepo.findDistanceByAddress(a.getAddress()).get().getDistanceLHS(), 2));
                break;
                case "lms":
                a.setDistanceFromSchool(round(excelAddressRepo.findDistanceByAddress(a.getAddress()).get().getDistanceLMS(), 2));
                break;
                case "rss":
                a.setDistanceFromSchool(round(excelAddressRepo.findDistanceByAddress(a.getAddress()).get().getDistanceRSS(), 2));
                break;
                case "sls":
                a.setDistanceFromSchool(round(excelAddressRepo.findDistanceByAddress(a.getAddress()).get().getDistanceSLS(), 2));
                break;
            };
            responseStudentInfo.add(a);
        });
        return responseStudentInfo;
    }

    private static double round(double value, int places) {
        if (places < 0) throw new IllegalArgumentException();
        long factor = (long) Math.pow(10, places);
        value = value * factor;
        long tmp = Math.round(value);
        return (double) tmp / factor;
    }
}
