package com.bit.controller;


import com.bit.services.StripeClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PaymentController {


    @Autowired
    private  StripeClient stripeClient;

    @PostMapping("/charge")
    public Map<String, Object> chargeCard(@RequestBody Map<String, Object> request) throws Exception {
        String token = request.get("id").toString();
        Integer amount = (Integer)request.get("amount");;
        return stripeClient.chargeCreditCard(token, amount);
    }

}
