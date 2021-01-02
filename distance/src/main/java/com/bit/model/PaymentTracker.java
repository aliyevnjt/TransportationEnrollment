package com.bit.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "paymenttracker")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class PaymentTracker {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private UUID id;

    private LocalDateTime paymentSubmitTime = LocalDateTime.now();

    @NotBlank(message = "Payment amount is mandatory")
    private double paymentAmount;
    @NotBlank(message = "School year is mandatory")
    private String schoolYear;

    @NotBlank
    private UUID studentId;

    public UUID getId() {
        return id;
    }

    public LocalDateTime getPaymentSubmitTime() {
        return paymentSubmitTime;
    }

    public double getPaymentAmount() {
        return paymentAmount;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public UUID getStudentId() {
        return studentId;
    }

}
