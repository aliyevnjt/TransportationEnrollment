package com.bit.model;

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
