package com.bit.controller;


import com.bit.model.PaymentTracker;
import com.bit.model.StudentInfo;
import com.bit.repo.PaymentTrackerRepo;
import com.bit.services.PaymentTrackerService;
import com.bit.services.StripeClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
public class PaymentController {


//    @Autowired
//    private  StripeClient stripeClient;
//
//    @PostMapping("/api/charge")
//    public Map<String, Object> chargeCard(@RequestBody Map<String, Object> request) throws Exception {
//        String token = request.get("id").toString();
//        Integer amount = (Integer)request.get("amount");;
//        return stripeClient.chargeCreditCard(token, amount);
//    }

    @Autowired
    private PaymentTrackerService paymentTrackerService;

    @Autowired
    private PaymentTrackerRepo paymentTrackerRepo;

    @PostMapping("/api/payment")
    public ResponseEntity getCalculation(@RequestBody String paymentInfo){
        //paymentInfo = "https://unibannk.com/payment?"+"UniqueID=89f3f7d8-6639-4ccd-a8b1-09b37330c8eb&Address1=10+Salem+Street&Address2=Unit+32&City=Boston&State=MA&ZipCode=02123&PhoneNumber=3234567656&EmailAddress=a%40gmailcom&Amount=154&Amount=23&Amount=234&Amount=123&Amount=125&Amount=500&Student1=John&Grade=6&Grade=7&Grade=9&Grade=10&Grade=9&Student2=Mike&Student3=Adam&Student4=Tom&Student5=Sam&AmountPaid=25.43&Date%2FTimeProcessed=5%2F1%2F2021+5%3A34%3A32+AM&ConfirmationNumber=202105011449&CustomerID=1463";
        paymentInfo = "https://unibannk.com/payment?" + paymentInfo;
        URL url = null;
        try{
           url =  new URL(paymentInfo);
        }catch (MalformedURLException e){

        }
        PaymentTracker paymentTracker = paymentTrackerService.setPaymentInfo(url);

        return new ResponseEntity(paymentTrackerRepo.save(paymentTracker), HttpStatus.CREATED);
    }

}
