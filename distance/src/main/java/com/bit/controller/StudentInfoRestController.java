package com.bit.controller;


import com.bit.argis.DistanceCalculator;
import com.bit.model.StudentInfo;
import com.bit.repo.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class StudentInfoRestController {

    @Autowired
    private DistanceCalculator distanceCalculator;

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/student")
    public StudentInfo calculateDistance(@RequestBody StudentInfo studentInfo){
        System.out.println("Request: " + studentInfo.toString());
        double dist = distanceCalculator.getDistance(studentInfo.getAddress()).getTotalLength();
        System.out.println("Dist: " + dist);
        studentInfo.setDistanceFromSchool(dist);
        System.out.println("Response: " + studentInfo.toString());
        studentRepository.save(studentInfo);
        return studentInfo;
    }

    @GetMapping("/student/{id}")
    public StudentInfo getById(@PathVariable Long id){
        StudentInfo studentInfo = studentRepository.getOne(id);
        return studentInfo;
    }

//    @GetMapping("/student")
//    public StudentInfo getStudent(){
//        return studentInfo1;
//    }



}
