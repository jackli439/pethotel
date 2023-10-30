package com.jli.pethotel.pethotelserver.room;

import com.jli.pethotel.pethotelserver.booking.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}
