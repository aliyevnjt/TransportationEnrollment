package com.bit.services;

import com.bit.model.Users;
import com.bit.repo.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import java.util.List;

import static com.bit.model.Users.RoleType.DISTRICT_ADMIN;

/**
 * @author ykeskin
 * @since 5/2/2021
 */
@Service
public class UsersService {
    @Autowired
    private UsersRepo usersRepo;

    public List<Users> getDistrictUsers(Users user) {
        if(user.getRoleType().equals(DISTRICT_ADMIN)) {
            List<Users> districtUsers = usersRepo.findByDistrict(user.getDistrict());
            return districtUsers;
        }
        // TODO service error
        return null;
    }

    @Transactional
    public void addUser(Users user) {

    }
}
