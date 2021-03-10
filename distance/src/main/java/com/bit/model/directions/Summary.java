package com.bit.model.directions;

public class Summary {

    private double totalLength;
    private double totalTime;
    private double totalDriveTime;

    public Summary() {
    }

    public double getTotalLength() {
        return totalLength;
    }

    public void setTotalLength(double totalLength) {
        this.totalLength = totalLength;
    }

    public double getTotalTime() {
        return totalTime;
    }

    public void setTotalTime(double totalTime) {
        this.totalTime = totalTime;
    }

    public double getTotalDriveTime() {
        return totalDriveTime;
    }

    public void setTotalDriveTime(double totalDriveTime) {
        this.totalDriveTime = totalDriveTime;
    }

    @Override
    public String toString() {
        return "Summary{" +
                "totalLength=" + totalLength +
                ", totalTime=" + totalTime +
                ", totalDriveTime=" + totalDriveTime +
                '}';
    }
}
