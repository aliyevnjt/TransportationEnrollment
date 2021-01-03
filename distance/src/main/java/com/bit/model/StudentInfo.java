package com.bit.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.UUID;


@Entity
@Table(name = "studentinfo")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class StudentInfo {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private UUID id;
    @NotNull(message = "First Name is mandatory")
    @Size(min=1, max=30)
    private String fname;
    @NotNull(message = "Last Name is mandatory")
    @Size(min = 1, max = 30)
    private String lname;
    @NotNull(message = "Address is mandatory")
    @Size(min = 1, max = 120)
    private String address;
    @NotNull(message = "City is mandatory")
    @Size(min = 1, max = 30)
    private String city;
    @NotNull(message = "State is mandatory")
    @Size(min = 1, max = 30)
    private String state;
    private double distanceFromSchool;
    @Size(min = 5, max = 11)
    @NotNull(message = "Zip code is mandatory")
    private String zip;
    @Size(min = 1, max = 2)
    @NotNull(message = "Grade is mandatory")
    private String grade;
    @Size(min = 1, max = 50)
    @NotNull(message = "School is mandatory")
    private String school;
    @Size(min = 1, max = 30)
    @NotNull(message = "Parent Name is mandatory")
    private String parentName;
    @Size(min = 1, max = 30)
    @NotNull(message = "Parent Name is mandatory")
    private String parentEmailAddress;
    @Size(min = 1, max = 15)
    @NotNull(message = "Parent Name is mandatory")
    private String parentPhoneNumber;
    @Size(min = 0, max = 10)
    private String unit;
    private boolean homeless;
    @Size(min = 0, max = 15)
    private String mName;
    private String enrollmentStatus;
    private LocalDateTime formSubmitTime = LocalDateTime.now();

    public StudentInfo() {
    }
    public String getEnrollmentStatus() {
        return enrollmentStatus;
    }

    public void setEnrollmentStatus(String enrollmentStatus) {
        this.enrollmentStatus = enrollmentStatus;
    }

    public LocalDateTime getFormSubmitTime() {
        return formSubmitTime;
    }

    public String getGrade() {
        return grade;
    }

    public String getSchool() {
        return school;
    }

    public String getParentName() {
        return parentName;
    }

    public String getParentEmailAddress() {
        return parentEmailAddress;
    }

    public String getParentPhoneNumber() {
        return parentPhoneNumber;
    }

    public String getUnit() {
        return unit;
    }

    public boolean isHomeless() {
        return homeless;
    }

    public String getmName() {
        return mName;
    }

    public String getZip() {
        return zip;
    }

    public double getDistanceFromSchool() {
        return distanceFromSchool;
    }

    public void setDistanceFromSchool(double distanceFromSchool) {
        this.distanceFromSchool = distanceFromSchool;
    }

    public String getAddress() {
        return address;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }

    public String getFname() {
        return fname;
    }

    public String getLname() {
        return lname;
    }

    public UUID getId() {
        return id;
    }


}
