package com.bit.model.form_data;

import javax.persistence.*;

@Entity
@Table(name = "addresses")
public class AddresExcel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String address;
    private double distanceRSS;
    private double distanceSLS;
    private double distanceLMS;
    private double distanceLHS;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getDistanceRSS() {
        return distanceRSS;
    }

    public void setDistanceRSS(double distanceRSS) {
        this.distanceRSS = distanceRSS;
    }

    public double getDistanceSLS() {
        return distanceSLS;
    }

    public void setDistanceSLS(double distanceSLS) {
        this.distanceSLS = distanceSLS;
    }

    public double getDistanceLMS() {
        return distanceLMS;
    }

    public void setDistanceLMS(double distanceLMS) {
        this.distanceLMS = distanceLMS;
    }

    public double getDistanceLHS() {
        return distanceLHS;
    }

    public void setDistanceLHS(double distanceLHS) {
        this.distanceLHS = distanceLHS;
    }

    @Override
    public String toString() {
        return "AddresExcel{" +
                "id=" + id +
                ", address='" + address + '\'' +
                ", distanceRSS=" + distanceRSS +
                ", distanceSLS=" + distanceSLS +
                ", distanceLMS=" + distanceLMS +
                ", distanceLHS=" + distanceLHS +
                '}';
    }
}