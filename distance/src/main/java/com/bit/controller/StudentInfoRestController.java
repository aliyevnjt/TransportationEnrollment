package com.bit.controller;

import com.bit.model.StudentInfoRetrieve;
import com.bit.services.DistanceCalculatorService;
import com.bit.model.StudentInfo;
import com.bit.repo.StudentRepository;
import com.bit.services.StudentInfoWriteAndReadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentInfoRestController {


    @Autowired
    private DistanceCalculatorService distanceCalculatorService;


    @Autowired
    private StudentInfoWriteAndReadService studentInfoWriteAndReadService;

    @PostMapping("/student")
    public ResponseEntity getDistance(@Valid @RequestBody StudentInfo studentInfo){
        return new ResponseEntity(distanceCalculatorService.createStudent(studentInfo, null), HttpStatus.CREATED);
    }

    @PostMapping("/students")
    public ResponseEntity getDistance(@Valid @RequestBody List<StudentInfo> studentInfo){
        return new ResponseEntity(distanceCalculatorService.createStudents(studentInfo), HttpStatus.CREATED);
    }

    @PostMapping("/submit")
    public ResponseEntity submitForm(@RequestBody StudentInfo studentInfo){
        studentInfoWriteAndReadService.saveStudent(studentInfo);
        return new ResponseEntity(studentInfo, HttpStatus.ACCEPTED);
    }

    @PostMapping("/submitAll")
    public ResponseEntity submitForm(@RequestBody List<StudentInfo> studentInfos){
        studentInfoWriteAndReadService.saveStudentS(studentInfos);
        return new ResponseEntity(studentInfos, HttpStatus.ACCEPTED);
    }


    @PostMapping("/student/request")
    public List<StudentInfo> getStudentInfo(@Valid @RequestBody StudentInfoRetrieve studentInfoRetrieve){
        return studentInfoWriteAndReadService.retrieveMatchingStudents(studentInfoRetrieve);
    }











}
