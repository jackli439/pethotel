package com.jli.pethotel.pethotelserver.booking;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/booking")
public class BookingController {


    BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping
    public List<Booking> findBookings() {
        return bookingService.findBookings();
    }

    @GetMapping(value = "{id}")
    public Booking findBooking(@PathVariable String id) {
        return bookingService.findBooking(id);
    }

    @PostMapping
    public Booking addBooking(@RequestBody Booking booking) {
        return bookingService.addBooking(booking);
    }

    @PutMapping(value = "{id}/checkedIn")
    public Booking updateCheckedIn(@PathVariable String id, @RequestParam String value) {
        return bookingService.updateCheckedIn(id, value);
    }
}
