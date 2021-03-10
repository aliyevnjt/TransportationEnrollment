package com.bit.model.form_data;

import javax.persistence.*;


@Entity
@Table(name = "grade")
public class Grades {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String label;
    private String value;
    private String level;


    public int getId() {
        return id;
    }

    public String getLabel() {
        return label;
    }

    public String getValue() {
        return value;
    }

    public String getLevel() {
        return level;
    }
}
