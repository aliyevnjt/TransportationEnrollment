package com.bit.repo;

import com.bit.model.form_data.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ExcelAddressRepo extends JpaRepository<Address, Long> {

    Optional<Address> findTopDistanceByAddress(String address);

    Optional<Address> findTopAddressByAddress(String address);

}
