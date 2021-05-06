package com.bit.controller;

import com.bit.model.Users;
import com.bit.repo.UsersRepo;
import com.bit.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

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

    @GetMapping("/api/users")
    public ResponseEntity getUsersFromDistrict(@Valid @RequestBody Users user) {
        List<Users> districtUsers = usersService.getDistrictUsers(user);
        return new ResponseEntity(districtUsers, HttpStatus.OK);
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
