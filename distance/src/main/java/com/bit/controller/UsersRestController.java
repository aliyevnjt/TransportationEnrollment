package com.bit.controller;

import com.bit.model.Users;
import com.bit.repo.UsersRepo;
import com.bit.services.UsersService;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.List;
import java.util.Map;

/**
 * @author ykeskin
 * @since 5/2/2021
 */
@RestController
@CrossOrigin(origins = "*")
public class UsersRestController {

    @Autowired
    private UsersRepo usersRepo;

    @Autowired
    private UsersService usersService;

    @PostMapping("/api/users")
    public ResponseEntity getUsersFromDistrict(@Valid @RequestBody Users user) {
        List<Users> districtUsers = usersService.getDistrictUsers(user);
        return new ResponseEntity(districtUsers, HttpStatus.OK);
    }

    @PostMapping("/api/googleAuth")
    public ResponseEntity validateToken(@Valid @RequestBody Map<String, String> data) {
        Users user = usersService.authenticateUser(data);
        return new ResponseEntity(user, HttpStatus.OK);
    }

    @GetMapping("/api/usersAll")
    public ResponseEntity getAllUsers() {
        return new ResponseEntity(usersRepo.findAll(), HttpStatus.OK);
    }

    @PostMapping("/api/addUser")
    public ResponseEntity addUser(@Valid @RequestBody List<Users> users) {
        return new ResponseEntity(usersRepo.saveAll(users), HttpStatus.CREATED);
    }


}
