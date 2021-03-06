package com.bit.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * @author ykeskin
 * @since 4/19/2021
 */
@Data
@Entity
@Table(name = "admin_settings", schema = "transportation")
public class AdminSettings {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private int id;

    @NotNull(message = "School year is mandatory")
    @Size(min=1, max=4)
    private String adminYear;

    @Size(min=1, max=4)
    private String activeInd;

    @Size(min=1, max=20)
    private String regStatus;

    @Size(max=500)
    private String openMessage;

    @Size(max=500)
    private String closedMessage;

    @Size(max=500)
    private String notification1;

    @Size(max=500)
    private String notification2;

    private Boolean notification1Status;

    private Boolean notification2Status;

    private Double busFee;

    private Double busFeeFamilyMax;

}
