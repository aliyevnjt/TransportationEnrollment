package com.bit.controller;

import com.bit.model.StudentInfoRetrieve;
import com.bit.services.DistanceCalculatorService;
import com.bit.model.StudentInfo;
import com.bit.repo.StudentRepository;
import com.bit.services.StudentInfoRetrieveService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
    private StudentRepository studentRepository;

    @Autowired
    private StudentInfoRetrieveService studentInfoRetrieveService;

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
        studentRepository.save(studentInfo);
        return new ResponseEntity(studentInfo, HttpStatus.ACCEPTED);
    }

    @PostMapping("/submitAll")
    public ResponseEntity submitForm(@RequestBody List<StudentInfo> studentInfo){
        studentInfo.forEach(studentInfo1 -> studentRepository.save(studentInfo1));
        return new ResponseEntity(studentInfo, HttpStatus.ACCEPTED);
    }

    @GetMapping("/student/{id}")
    public StudentInfo getById(@PathVariable Long id){
        StudentInfo studentInfo = studentRepository.getOne(id);
        return studentInfo;
    }

    @PostMapping("/student/request")
    public List<StudentInfo> getStudentInfo(@Valid @RequestBody StudentInfoRetrieve studentInfoRetrieve){
        return studentInfoRetrieveService.retrieveMatchingStudents(studentInfoRetrieve);
    }











}
