package com.bit.model.form_data;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "grade", schema = "transportation")
public class Grades {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String schoolShortName;
    private String gradeLevel;

}
