package com.bit.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "paymenttracker", schema = "transportation")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class PaymentTracker {

    public PaymentTracker() {
    }

    @Id
    private UUID uniqueID;

    private LocalDateTime dateTimeProcessed;
    private long customerId;
    private double amountPaid;
    private String schoolYear;
    private long confirmationNumber;

    public PaymentTracker(UUID uniqueID, LocalDateTime dateTimeProcessed, long customerId, double amountPaid, String schoolYear, long confirmationNumber) {
        this.uniqueID = uniqueID;
        this.dateTimeProcessed = dateTimeProcessed;
        this.customerId = customerId;
        this.amountPaid = amountPaid;
        this.schoolYear = schoolYear;
        this.confirmationNumber = confirmationNumber;
    }
}
