package com.jli.pethotel.pethotelserver.task;

import com.jli.pethotel.pethotelserver.booking.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findAllByPetId(Long petId);
}
