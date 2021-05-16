package com.bit.model.coordinates;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Coordinates {

    private List<Candidates> candidates;

}
