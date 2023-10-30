package com.jli.pethotel.pethotelserver.room;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/room")
public class RoomController {


    RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @GetMapping
    public List<Room> findRooms() {
        return roomService.findRooms();
    }

    @GetMapping(value = "{id}")
    public Room findRoom(@PathVariable String id) {
        return roomService.findRoom(id);
    }

}
