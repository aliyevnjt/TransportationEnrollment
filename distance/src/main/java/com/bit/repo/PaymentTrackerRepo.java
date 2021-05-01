package com.bit.repo;

import com.bit.model.PaymentTracker;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentTrackerRepo extends JpaRepository<PaymentTracker, Long> {

}
