package com.jli.pethotel.pethotelserver.pet;

import com.jli.pethotel.pethotelserver.booking.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PetRepository extends JpaRepository<Pet, Long> {
}
