package com.bit.services;

import com.bit.model.PaymentTracker;
import com.bit.model.StudentInfo;
import com.bit.repo.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLDecoder;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

import static com.bit.model.StudentInfo.RegistrationStatus.REGISTERED;
import static com.bit.model.StudentInfo.PaymentType.UNIBANK;

@Service
public class PaymentTrackerService {

    @Autowired
    private StudentRepository studentRepository;

    private static Map<String, String> splitQuery(URL url){
        Map<String, String> query_pairs = new LinkedHashMap<String, String>();
        String query = url.getQuery();
        String[] pairs = query.split("&");
        int a = 1;
        int g = 1;
        try{
            for (String pair : pairs) {
                int idx = pair.indexOf("=");
                if(URLDecoder.decode(pair.substring(0, idx), "UTF-8").equals("Amount")){
                    query_pairs.put("Amount"+a, URLDecoder.decode(pair.substring(idx + 1), "UTF-8"));
                    a++;
                } else if(URLDecoder.decode(pair.substring(0, idx), "UTF-8").equals("Grade")){
                    query_pairs.put("Grade"+g, URLDecoder.decode(pair.substring(idx + 1), "UTF-8"));
                    g++;
                }
                else
                    query_pairs.put(URLDecoder.decode(pair.substring(0, idx), "UTF-8"),
                            URLDecoder.decode(pair.substring(idx + 1), "UTF-8"));
            }
        }catch (UnsupportedEncodingException e){

        }

        return query_pairs;
    }

    public PaymentTracker setPaymentInfo(URL url){
        Map<String, String> paymentInfo = splitQuery(url);
        UUID uniqueID = UUID.fromString(paymentInfo.get("UniqueID"));
        double amountPaid = Double.parseDouble(paymentInfo.get("AmountPaid"));
        LocalDateTime processedDate = parseDateTime(paymentInfo.get("Date/TimeProcessed"));
        long confirmationNumber = Long.parseLong(paymentInfo.get("ConfirmationNumber"));
        long customerID = Long.parseLong(paymentInfo.get("CustomerID"));
        List<StudentInfo> stds = studentRepository.findByUniqueID(uniqueID);
        stds.forEach(s -> {
            s.setRegistrationStatus(REGISTERED);
            s.setPaymentType(UNIBANK);
        });
        studentRepository.saveAll(stds);
        return new PaymentTracker(uniqueID, processedDate, customerID, amountPaid, "2021", confirmationNumber);
    }

    private static LocalDateTime parseDateTime(String dateTime){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d/M/yyyy h:m:s a", Locale.ENGLISH);
        return LocalDateTime.parse(dateTime, formatter);
    }
}
