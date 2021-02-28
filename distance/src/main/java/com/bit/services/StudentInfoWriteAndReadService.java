package com.bit.services;

import com.bit.model.StudentInfo;
import com.bit.model.StudentInfoRetrieve;
import com.bit.repo.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentInfoWriteAndReadService {

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
            if(flag && fname!=null && !fname.isEmpty()) {
                if (!studentInfoList.get(i).getFname().equalsIgnoreCase(fname)) {
                    flag = false;
                }
            }
            if(flag && lname!=null && !lname.isEmpty()) {
                if (!studentInfoList.get(i).getLname().equalsIgnoreCase(lname)) {
                    flag = false;
                }
            }if(flag && school!=null && !school.isEmpty()){
                if(!studentInfoList.get(i).getSchool().equalsIgnoreCase(school)){
                    flag = false;
                }
            }if(flag && grade!=null && !grade.isEmpty()){
                if(!studentInfoList.get(i).getGrade().equalsIgnoreCase(grade)){
                    flag = false;
                }
            }if(flag && status!=null && !status.isEmpty()){
                if(!studentInfoList.get(i).getEnrollmentStatus().equalsIgnoreCase(status)){
                    flag = false;
                }
            }if(flag){
                resultStudents.add(studentInfoList.get(i));
            }
        }
        return resultStudents;

    }

    @Transactional
    public void saveStudent(StudentInfo studentInfo){
        studentRepository.save(studentInfo);
    }

    @Transactional
    public void saveStudentS(List<StudentInfo> studentInfos){
        studentRepository.saveAll(studentInfos);
    }
}