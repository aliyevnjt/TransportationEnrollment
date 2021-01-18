package com.bit.model.coordinates;

public class Location {
    private String x;
    private String y;

    public String getX() {
        return x;
    }

    public String getY() {
        return y;
    }

    @Override
    public String toString() {
        return "Location{" +
                "x=" + x +
                ", y=" + y +
                '}';
    }
}
