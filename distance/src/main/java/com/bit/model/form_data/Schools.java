package com.bit.model.form_data;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "schools", schema = "transportation")
public class Schools {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String district;
    private String schoolShortName;
    private String schoolLongName;
    private String address;
    private String city;
    private String state;
    private String zipCode;
    private String phoneNumber;
    private String website;

}
