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
@Table(name = "adminSettings", schema = "transportation")
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

    @Column(name="regStatus", nullable = false)
    private String regStatus;


    @Size(min=1, max=500)
    private String openMessage;

    @Size(min=1, max=500)
    private String closedMessage;

    @Size(min=1, max=500)
    private String notification1;

    @Size(min=1, max=500)
    private String notification2;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAdminYear() {
        return adminYear;
    }

    public void setAdminYear(String adminYear) {
        this.adminYear = adminYear;
    }

    public String getActiveInd() {
        return activeInd;
    }

    public void setActiveInd(String activeInd) {
        this.activeInd = activeInd;
    }

    public String getRegStatus() {
        return regStatus;
    }

    public void setRegStatus(String regStatus) {
        this.regStatus = regStatus;
    }

    public String getOpenMessage() {
        return openMessage;
    }

    public void setOpenMessage(String openMessage) {
        this.openMessage = openMessage;
    }

    public String getClosedMessage() {
        return closedMessage;
    }

    public void setClosedMessage(String closedMessage) {
        this.closedMessage = closedMessage;
    }

    public String getNotification1() {
        return notification1;
    }

    public void setNotification1(String notification1) {
        this.notification1 = notification1;
    }

    public String getNotification2() {
        return notification2;
    }

    public void setNotification2(String notification2) {
        this.notification2 = notification2;
    }

    @Override
    public String toString() {
        return "SchoolYear{" +
                "id=" + id +
                ", adminYear='" + adminYear + '\'' +
                ", activeInd='" + activeInd + '\'' +
                ", regStatus='" + regStatus + '\'' +
                ", openMessage='" + openMessage + '\'' +
                ", closedMessage='" + closedMessage + '\'' +
                ", notification1='" + notification1 + '\'' +
                ", notification2='" + notification2 + '\'' +
                '}';
    }
}
