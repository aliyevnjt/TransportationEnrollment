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
        studentInfo.setDistanceFromSchool(round(dist,2));
        String grade = studentInfo.getGrade();
        if(grade.equals("7") || grade.equals("8") || grade.equals("8")
                || grade.equals("9") || grade.equals("10") || grade.equals("11") || grade.equals("12")){
            studentInfo.setEnrollmentStatus("paid");
        }
        else {
            if(studentInfo.getDistanceFromSchool() > 2){
                studentInfo.setEnrollmentStatus("free");
            }else {
                studentInfo.setEnrollmentStatus("paid");
            }
        }
        studentRepository.save(studentInfo);
        return new ResponseEntity(studentInfo, HttpStatus.CREATED);
    }

    @GetMapping("/student/{id}")
    public StudentInfo getById(@PathVariable Long id){
        StudentInfo studentInfo = studentRepository.getOne(id);
        return studentInfo;
    }

    private static double round(double value, int places) {
        if (places < 0) throw new IllegalArgumentException();

        long factor = (long) Math.pow(10, places);
        value = value * factor;
        long tmp = Math.round(value);
        return (double) tmp / factor;
    }




}
