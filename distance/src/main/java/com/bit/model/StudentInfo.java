package com.bit.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "student_info", schema = "transportation")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class StudentInfo {

    public enum RegistrationStatus {
        IN_PROGRESS,
        REGISTERED
    }
    @Enumerated(EnumType.STRING)
    private RegistrationStatus registrationStatus;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private UUID id;

    @NotNull(message = "First Name is mandatory")
    @Size(min = 1, max = 30)
    private String fname;

    @Size(min = 0, max = 15)
    private String mName;

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


    @NotNull(message = "Admin Year is mandatory")
    private String adminYear;

    @NotNull(message = "Birth Date is mandatory")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthDate;

    private String enrollmentStatus;

    private LocalDateTime createDate = LocalDateTime.now();

    private UUID uniqueID;

    public enum PaymentType {
        UNIBANK,
        CHECK,
        CASH,
        MONEY_ORDER
    }
    @Enumerated(EnumType.STRING)
    private PaymentType paymentType;

}
