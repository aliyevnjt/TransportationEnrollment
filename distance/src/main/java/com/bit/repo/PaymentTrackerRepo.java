package com.bit.repo;

import com.bit.model.PaymentTracker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentTrackerRepo extends JpaRepository<PaymentTracker, Long> {

}
