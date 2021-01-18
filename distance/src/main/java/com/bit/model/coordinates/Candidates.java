package com.bit.model.coordinates;

public class Candidates {
    private Location location;

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    @Override
    public String toString() {
        return "Candidates{" +
                "location=" + location +
                '}';
    }
}
