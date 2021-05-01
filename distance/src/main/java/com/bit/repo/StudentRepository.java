package com.bit.repo;

import com.bit.model.StudentInfo;
import com.bit.model.form_data.AddresExcel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface StudentRepository extends JpaRepository<StudentInfo, UUID> {
//    @Modifying
//    @Query("update studentinfo u set u.registration_status = :registration_status where u.id = :id")
//    void updateStatus(@Param(value = "id") UUID id, @Param(value = "registration_status") StudentInfo.RegistrationStatus registration_status);

    List<StudentInfo> findByuniqueID(UUID uniqueID);
    List<StudentInfo> findByfname(String fname);


}
