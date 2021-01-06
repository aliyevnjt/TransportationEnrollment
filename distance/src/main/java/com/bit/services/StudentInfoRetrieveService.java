package com.bit.services;

import com.bit.model.StudentInfo;
import com.bit.model.StudentInfoRetrieve;
import com.bit.repo.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentInfoRetrieveService {

    @Autowired
    private StudentRepository studentRepository;

    public List<StudentInfo> retrieveMatchingStudents(StudentInfoRetrieve studentInfoRetrieve){
        List<StudentInfo> resultStudents = new ArrayList<>();
        String fname = studentInfoRetrieve.getFname();
        String lname = studentInfoRetrieve.getLname();
        String school = studentInfoRetrieve.getSchool();
        String grade = studentInfoRetrieve.getGrade();
        String status = studentInfoRetrieve.getEnrollmentStatus();
        List<StudentInfo> studentInfoList = studentRepository.findAll();
        for (int i = 0; i < studentInfoList.size(); i++) {
            boolean flag = true;
            if(!studentInfoList.get(i).getFname().equalsIgnoreCase(fname)||
                    !studentInfoList.get(i).getLname().equalsIgnoreCase(lname)){
                flag = false;
            }if(flag && school!=null){
                if(!studentInfoList.get(i).getSchool().equalsIgnoreCase(school)){
                    flag = false;
                }
            }if(flag && grade!=null){
                if(!studentInfoList.get(i).getGrade().equalsIgnoreCase(grade)){
                    flag = false;
                }
            }if(flag && status!=null){
                if(!studentInfoList.get(i).getEnrollmentStatus().equalsIgnoreCase(status)){
                    flag = false;
                }
            }if(flag){
                resultStudents.add(studentInfoList.get(i));
            }
        }
        return resultStudents;

    }
}
