package com.bit.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "payment_tracker", schema = "transportation")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class PaymentTracker {

    @Id
    private UUID uniqueID;

    private LocalDateTime processedDate;
    private long customerId;
    private double amountPaid;
    private String schoolYear;
    private long confirmationNumber;

}
