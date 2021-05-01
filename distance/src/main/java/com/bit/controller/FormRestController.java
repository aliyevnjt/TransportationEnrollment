package com.bit.controller;


import com.bit.repo.ExcelAddressRepo;
import com.bit.repo.GradeRepository;
import com.bit.repo.SchoolNamesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class FormRestController {


    @Autowired
    private GradeRepository gradeRepository;

    @Autowired
    private SchoolNamesRepository schoolNamesRepository;

    @Autowired
    private ExcelAddressRepo addressRepo;

    @GetMapping("/api/grades")
    public ResponseEntity getGrades(){
        return new ResponseEntity(gradeRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/api/schoolNames")
    public ResponseEntity getSchoolNames(){
        return new ResponseEntity(schoolNamesRepository.findAll(), HttpStatus.OK);

    }

    @GetMapping("/api/addresses")
    public ResponseEntity getAddresses() {
        return new ResponseEntity(addressRepo.findAll(), HttpStatus.OK);
    }
}
