package com.bit.paymentservice.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class PaymentServiceController {


    @Autowired
    private RestTemplate restTemplate;

    @PostMapping("/api/payment")
    public String getDistance(@Valid @RequestBody String paymentInfo){
        return restTemplate.postForObject("http://localhost:8086/api/payment", paymentInfo, String.class);
    }
}
