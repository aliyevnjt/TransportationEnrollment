package com.bit.paymentservice.controllers;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

    private static final Logger logger = LoggerFactory.getLogger(PaymentServiceController.class);

    @Autowired
    private RestTemplate restTemplate;

    @PostMapping("/api/payment")
    public String getDistance(@Valid @RequestBody String paymentInfo){
        logger.info("Payment sent to app server" + paymentInfo);
        return restTemplate.postForObject("http://app-server:8086/api/payment", paymentInfo, String.class);
    }
}
