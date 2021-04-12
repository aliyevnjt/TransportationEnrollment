package com.bit.repo;

import com.bit.model.form_data.AddresExcel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ExcelAddressRepo extends JpaRepository<AddresExcel, Long> {

    Optional<AddresExcel> findTopDistanceByAddress(String address);

    Optional<AddresExcel> findTopAddressByAddress(String address);

}
