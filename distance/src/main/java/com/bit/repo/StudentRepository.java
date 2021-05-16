package com.bit.repo;

import com.bit.model.StudentInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface StudentRepository extends JpaRepository<StudentInfo, UUID> {
//    @Modifying
//    @Query("update studentinfo u set u.registration_status = :registration_status where u.id = :id")
//    void updateStatus(@Param(value = "id") UUID id, @Param(value = "registration_status") StudentInfo.RegistrationStatus registration_status);

    List<StudentInfo> findByUniqueID(UUID uniqueID);
    List<StudentInfo> findByFname(String fname);


}
