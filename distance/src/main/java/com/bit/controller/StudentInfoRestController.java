package com.bit.controller;


import com.bit.model.StudentInfoRetrieve;
import com.bit.services.DistanceCalculatorService;
import com.bit.model.StudentInfo;
import com.bit.repo.StudentRepository;
import com.bit.services.StudentInfoRetrieveService;
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
        String fullAddress = studentInfo.getAddress() + " " + studentInfo.getCity()
                + " " + studentInfo.getState() + " " + studentInfo.getZip();
        double dist = distanceCalculatorService.getDistance(fullAddress, studentInfo.getSchool()).getTotalLength();
        studentInfo.setDistanceFromSchool(round(dist,2));
        String grade = studentInfo.getGrade();
        if(grade.equals("7") || grade.equals("8") || grade.equals("9")
                || grade.equals("10") || grade.equals("11") || grade.equals("12")){
            studentInfo.setEnrollmentStatus("paid");
        }
        else {
            if(studentInfo.getDistanceFromSchool() > 2){
                studentInfo.setEnrollmentStatus("free");
            }else {
                studentInfo.setEnrollmentStatus("paid");
            }
        }
        return new ResponseEntity(studentInfo, HttpStatus.CREATED);
    }
    @PostMapping("/submit")
    public StudentInfo submitForm(@RequestBody StudentInfo studentInfo){
        studentRepository.save(studentInfo);
        return studentInfo;
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


    private static double round(double value, int places) {
        if (places < 0) throw new IllegalArgumentException();
        long factor = (long) Math.pow(10, places);
        value = value * factor;
        long tmp = Math.round(value);
        return (double) tmp / factor;
    }








}
