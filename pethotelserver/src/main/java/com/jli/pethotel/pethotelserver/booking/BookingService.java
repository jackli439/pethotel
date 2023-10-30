package com.jli.pethotel.pethotelserver.booking;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class BookingService {

    BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public List<Booking> findBookings() {
        return bookingRepository.findAll();
    }

    public Booking findBooking(String id) {
        return bookingRepository.findById(Long.parseLong(id)).orElseThrow(
                () -> {
                    return new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Booking with id %s not found", id));
                }
        );
    }

    public Booking addBooking(Booking booking) {
        return bookingRepository.saveAndFlush(booking);
//        return bookingRepository.save(booking);
    }

    public Booking updateCheckedIn(String id, String value) {
        Booking booking = findBooking(id);
        booking.setCheckedIn(Boolean.parseBoolean(value));
        return bookingRepository.save(booking);
    }
}
