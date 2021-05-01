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


@RestController
@CrossOrigin(origins = "*")
public class StudentInfoRestController {

    private static final Logger logger = LoggerFactory.getLogger(StudentInfoRestController.class);

    @Autowired
    private DistanceCalculatorService distanceCalculatorService;


    @Autowired
    private StudentInfoWriteAndReadService studentInfoWriteAndReadService;

    @Autowired
    private DistanceFromFileService distanceFromFileService;

    @PostMapping("/api/student")
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


    @PostMapping("/api/student/request")
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

    @PostMapping("/api/payment")
    public void getPayment(@RequestBody String object){
        logger.info("some logs ...");
        try{
            logger.info(object.toString());
        }catch (Exception e){
            logger.info(e.getMessage());
        }

    }












}
