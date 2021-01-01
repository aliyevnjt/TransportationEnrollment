package com.bit.controller;

import com.bit.argis.DistanceCalculator;
import com.bit.model.StudentInfo;
import com.bit.repo.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
public class StudentWebController {

    @RequestMapping("/")
    public  String home(){
        System.out.println("At Home page");
        return "index";
    }

    @GetMapping("/register")
    public String showForm(Model model){
        StudentInfo studentInfo = new StudentInfo();
        model.addAttribute("studentinfo", studentInfo);
        return "registration_form";
    }

    @PostMapping("/register")
    public String submitForm(@ModelAttribute("studentinfo") StudentInfo studentInfo){
        System.out.println("Request: " + studentInfo.toString());
        double dist = distanceCalculator.getDistance(studentInfo.getAddress()).getTotalLength();
        System.out.println("Dist: " + dist);
        studentInfo.setDistanceFromSchool(dist);
        System.out.println("Response: " + studentInfo.toString());
        studentRepository.save(studentInfo);
        return "registration_success";
    }



    @Autowired
    private DistanceCalculator distanceCalculator;

    @Autowired
    private StudentRepository studentRepository;

//
//    @RequestMapping("/")
//    public String student1 () {
//        return "student1.jsp";
//    }
//
//    @RequestMapping("/studentWeb")
//    public String studentWeb(@ModelAttribute("studentInfo") StudentInfo studentInfo ) {
//        double dist = distanceCalculator.getDistance(studentInfo.getAddress()).getTotalLength();
//        System.out.println("Dist: " + dist);
//        studentInfo.setDistanceFromSchool(dist);
//        System.out.println("Response: " + studentInfo.toString());
//        studentRepository.save(studentInfo);
//        return "student.jsp";
//    }
//
//
//    @RequestMapping(value = "/addEmployee", method = RequestMethod.POST)
//    public String submit(@ModelAttribute("studentinfo")StudentInfo studentInfo,
//                         BindingResult result, ModelMap model) {
//
//        return "student1.jsp";
//    }


}
