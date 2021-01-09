package com.bit.services;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.model.Customer;
import com.stripe.model.PaymentIntent;
import com.stripe.model.PaymentMethod;
import com.stripe.param.PaymentIntentCreateParams;
import com.stripe.param.PaymentMethodAttachParams;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;


import java.util.HashMap;
import java.util.Map;


@Service
public class StripeClient {
    Logger logger = LoggerFactory.getLogger(Logger.class);


    @Value("${stripe.secret}")
    private String secret;

//    @Autowired
//    StripeClient() {
//        System.out.println(appTitle);
//    }

    public Map<String, Object> chargeCreditCard(String token, int amount) throws Exception {
        Stripe.apiKey = secret;
        Map<String, Object> params = new HashMap<>();
        params.put("amount", amount);
        params.put("currency", "usd");
        params.put("payment_method", token);
        params.put("confirm", true);
        PaymentIntent intent = PaymentIntent.create(params);
        return responseMap(intent);
    }

    private Map<String, Object> responseMap(PaymentIntent paymentIntent){
        Map<String, Object> response = new HashMap<String, Object>();
        String strId = paymentIntent.getId();
        response.put("seller_message",paymentIntent.getCharges().getData().get(0).getOutcome().getSellerMessage());
        response.put("confirmation",strId.substring(strId.length()-3).toUpperCase()+paymentIntent.getCharges().getData().get(0).getCreated());
        response.put("status", paymentIntent.getStatus());
        return response;
    }
}
