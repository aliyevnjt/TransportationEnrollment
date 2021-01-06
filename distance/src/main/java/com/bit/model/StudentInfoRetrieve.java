package com.bit.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.UUID;

public class StudentInfoRetrieve {

    private String fname;
    private String lname;
    private String grade;
    private String school;
    private String enrollmentStatus;
    public StudentInfoRetrieve() {
    }

    public String getFname() {
        return fname;
    }

    public String getLname() {
        return lname;
    }

    public String getGrade() {
        return grade;
    }

    public String getSchool() {
        return school;
    }

    public String getEnrollmentStatus() {
        return enrollmentStatus;
    }

    @Override
    public String toString() {
        return "StudentInfoRetrieve{" +
                "fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", grade='" + grade + '\'' +
                ", school='" + school + '\'' +
                ", enrollmentStatus='" + enrollmentStatus + '\'' +
                '}';
    }
}
