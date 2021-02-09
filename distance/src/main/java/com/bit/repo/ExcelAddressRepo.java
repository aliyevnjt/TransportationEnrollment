package com.bit.repo;

import com.bit.model.form_data.AddresExcel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExcelAddressRepo extends JpaRepository<AddresExcel, Long> {

}
