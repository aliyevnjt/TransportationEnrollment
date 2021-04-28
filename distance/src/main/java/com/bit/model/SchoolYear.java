package com.bit.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Objects;

/**
 * @author ykeskin
 * @since 4/19/2021
 */

@Entity
@Table(name = "school_year")
public class SchoolYear {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private int id;

    @NotNull(message = "School year is mandatory")
    @Size(min=1, max=50)
    private String value;

    // TODO add activeInd to populate the initial values on admin settings page
//    @Column(name="activeInd", nullable = false, columnDefinition="default 'N'")
//    @Size(min=1, max=1)
    @Transient
    private String activeInd;

    // TODO missing item from admin settings page
//    @Column(name="regStatus", nullable = false, columnDefinition="default 'closed'")
//    @Size(min=1, max=12)
    @Transient
    private String regStatus;


    @Size(min=1, max=500)
    private String message1;

    @Size(min=1, max=500)
    private String message2;

    @Size(min=1, max=500)
    private String message3;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getMessage1() {
        return message1;
    }

    public void setMessage1(String message1) {
        this.message1 = message1;
    }

    public String getMessage2() {
        return message2;
    }

    public void setMessage2(String message2) {
        this.message2 = message2;
    }

    public String getMessage3() {
        return message3;
    }

    public void setMessage3(String message3) {
        this.message3 = message3;
    }

    // TODO should be a field in DB or a value in a config file or DynamoDB
    public String getActiveInd() {
        return Objects.equals(this.value, "2021") ? "Y" : "N";
    }

    public void setActiveInd(String activeInd) {
        this.activeInd = activeInd;
    }
    public String getRegStatus() {
        return "Open";
    }

    public void setRegStatus(String regStatus) {
        this.regStatus = regStatus;
    }
    @Override
    public String toString() {
        return "SchoolYear{" +
                "id=" + id +
                ", value='" + value + '\'' +
                ", activeInd='" + activeInd + '\'' +
                ", regStatus='" + regStatus + '\'' +
                ", message1='" + message1 + '\'' +
                ", message2='" + message2 + '\'' +
                ", message3='" + message3 + '\'' +
                '}';
    }
}
