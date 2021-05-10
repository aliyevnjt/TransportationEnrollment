package com.bit.services;

import com.bit.model.Users;
import com.bit.repo.UsersRepo;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.List;
import java.util.Map;

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

    public Users authenticateUser(Map<String, String> data) {
        Users user = new Users();
        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(new NetHttpTransport(), new GsonFactory())
                .setAudience(Collections.singletonList(data.get("clientId")))
                .build();

        try {
            GoogleIdToken idToken = verifier.verify(data.get("tokenId"));
            if (idToken != null) {
                GoogleIdToken.Payload payload = idToken.getPayload();

                // Print user identifier
                String userId = payload.getSubject();
                System.out.println("User ID: " + userId);

                System.out.println(payload.toPrettyString());

                // Get profile information from payload
                String email = payload.getEmail();
                boolean emailVerified = payload.getEmailVerified();
                if(emailVerified) {
                    user = usersRepo.findByEmail(email);
                }
            } else {
                System.out.println("Invalid ID token.");
            }
        } catch (GeneralSecurityException e) {
            System.out.println(e.getLocalizedMessage());
        } catch (IOException e) {
            System.out.println(e.getLocalizedMessage());
        }
        // TODO should return rejected or something when not found
        return user;
    }
}
