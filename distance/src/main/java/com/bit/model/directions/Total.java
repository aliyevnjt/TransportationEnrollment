package com.bit.model.directions;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Total {

    private String checksum;
    private List<Directions> directions;
    public Total() {
    }

    public String getChecksum() {
        return checksum;
    }

    public void setChecksum(String checksum) {
        this.checksum = checksum;
    }

    public List<Directions> getDirections() {
        return directions;
    }

    public void setDirections(List<Directions> directions) {
        this.directions = directions;
    }

    @Override
    public String toString() {
        return "Total{" +
                "checksum='" + checksum + '\'' +
                ", directions=" + directions +
                '}';
    }
}
