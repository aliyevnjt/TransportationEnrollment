package com.bit.model.form_data;

import javax.persistence.*;

@Entity
@Table(name = "schoolnames")
public class SchoolNames {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String label;
    private String value;


    public int getId() {
        return id;
    }

    public String getLabel() {
        return label;
    }

    public String getValue() {
        return value;
    }
}
