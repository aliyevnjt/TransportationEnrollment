package com.bit.controller;


import com.bit.argis.DistanceCalculator;
import com.bit.model.StudentInfo;
import com.bit.repo.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentInfoRestController {

    @Autowired
    private DistanceCalculator distanceCalculator;

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/student")
    public ResponseEntity calculateDistance(@Valid @RequestBody StudentInfo studentInfo){
        String fullAddress = studentInfo.getAddress() + " " + studentInfo.getCity()
                + " " + studentInfo.getState() + " " + studentInfo.getZip();
        double dist = distanceCalculator.getDistance(fullAddress, studentInfo.getSchool()).getTotalLength();
        studentInfo.setDistanceFromSchool(dist);
        studentRepository.save(studentInfo);
        return new ResponseEntity(studentInfo, HttpStatus.CREATED);
    }

    @GetMapping("/student/{id}")
    public StudentInfo getById(@PathVariable Long id){
        StudentInfo studentInfo = studentRepository.getOne(id);
        return studentInfo;
    }



}
