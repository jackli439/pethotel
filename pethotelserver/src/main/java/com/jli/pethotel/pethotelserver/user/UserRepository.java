package com.jli.pethotel.pethotelserver.user;

import com.jli.pethotel.pethotelserver.booking.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
