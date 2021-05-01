package com.bit.model.form_data;

import javax.persistence.*;


@Entity
@Table(name = "grade", schema = "transportation")
public class Grades {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String schoolShortName;
    private String gradeLevel;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSchoolShortName() {
        return schoolShortName;
    }

    public void setSchoolShortName(String schoolShortName) {
        this.schoolShortName = schoolShortName;
    }

    public String getGradeLevel() {
        return gradeLevel;
    }

    public void setGradeLevel(String gradeLevel) {
        this.gradeLevel = gradeLevel;
    }

    @Override
    public String toString() {
        return "Grades{" +
                "id=" + id +
                ", schoolShortName='" + schoolShortName + '\'' +
                ", gradeLevel='" + gradeLevel + '\'' +
                '}';
    }
}
