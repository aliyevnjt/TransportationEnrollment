package com.bit.model.form_data;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "address", schema = "transportation")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String address;
    private double distanceRSS;
    private double distanceSLS;
    private double distanceLMS;

}
