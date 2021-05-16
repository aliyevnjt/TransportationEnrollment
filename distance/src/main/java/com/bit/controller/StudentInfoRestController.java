package com.bit.controller;

import com.bit.model.StudentInfoRetrieve;
import com.bit.services.DistanceCalculatorService;
import com.bit.model.StudentInfo;
import com.bit.services.DistanceFromFileService;
import com.bit.services.StudentInfoWriteAndReadService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin(origins = "*")
@RestController
public class StudentInfoRestController {

    private static final Logger logger = LoggerFactory.getLogger(StudentInfoRestController.class);

    @Autowired
    private DistanceCalculatorService distanceCalculatorService;

    @Autowired
    private StudentInfoWriteAndReadService studentInfoWriteAndReadService;

    @Autowired
    private DistanceFromFileService distanceFromFileService;

    @GetMapping("/api/student")
    public ResponseEntity getDistance(@Valid @RequestBody StudentInfo studentInfo){
        return new ResponseEntity(distanceCalculatorService.createStudent(studentInfo, null), HttpStatus.CREATED);
    }

    @PostMapping("/api/students")
    public ResponseEntity getDistance(@Valid @RequestBody List<StudentInfo> studentInfo){
        return new ResponseEntity(distanceCalculatorService.createStudents(studentInfo), HttpStatus.CREATED);
    }

    @PostMapping("/api/submit")
    public ResponseEntity submitForm(@RequestBody StudentInfo studentInfo){
        studentInfoWriteAndReadService.saveStudent(studentInfo);
        return new ResponseEntity(studentInfo, HttpStatus.ACCEPTED);
    }

    @PostMapping("/api/submitAll")
    public ResponseEntity submitForm(@RequestBody List<StudentInfo> studentInfos){
        studentInfoWriteAndReadService.saveStudentS(studentInfos);
        return new ResponseEntity(studentInfos, HttpStatus.ACCEPTED);
    }


    @PostMapping("/api/studentSearch")
    public List<StudentInfo> getStudentInfo(@Valid @RequestBody StudentInfoRetrieve studentInfoRetrieve){
        return studentInfoWriteAndReadService.retrieveMatchingStudents(studentInfoRetrieve);
    }

    @PostMapping("/api/calculate")
    public ResponseEntity getCalculation(@Valid @RequestBody List<StudentInfo> studentInfo){
        return new ResponseEntity(distanceCalculatorService.createStudents(studentInfo), HttpStatus.CREATED);
    }


    @PostMapping("/api/calculateFile")
    public ResponseEntity getCalculationFromFile(@Valid @RequestBody List<StudentInfo> studentInfo){
        distanceFromFileService.createStudents(studentInfo);
        return new ResponseEntity(distanceFromFileService.createStudents(studentInfo), HttpStatus.CREATED);
    }

    @PostMapping("/api/pre-enrollment")
    public ResponseEntity preEnrollment(@Valid @RequestBody List<StudentInfo> studentInfos){
        studentInfos = distanceFromFileService.createStudents(studentInfos);
        studentInfos = studentInfoWriteAndReadService.preEnrollment(studentInfos);
        studentInfoWriteAndReadService.saveStudentS(studentInfos);
        return new ResponseEntity(studentInfos, HttpStatus.CREATED);
    }

    @PutMapping("/api/enrollment")
    public ResponseEntity enrollment(@Valid @RequestBody List<StudentInfo> studentInfos){
        studentInfos = studentInfos.stream().filter(s ->
            s.getEnrollmentStatus().toLowerCase().equals("free")
        ).collect(Collectors.toList());
        studentInfos.forEach(s -> studentInfoWriteAndReadService.updateEnrollmentStatus(s.getId()));
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }


}
