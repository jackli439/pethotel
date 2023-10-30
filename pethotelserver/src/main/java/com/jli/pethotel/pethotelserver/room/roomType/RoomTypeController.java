package com.jli.pethotel.pethotelserver.room.roomType;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/roomType")
public class RoomTypeController {


    RoomTypeService roomTypeService;

    public RoomTypeController(RoomTypeService roomTypeService) {
        this.roomTypeService = roomTypeService;
    }

    @GetMapping
    public List<RoomType> findRoomTypes() {
        return roomTypeService.findRoomTypes();
    }

    @GetMapping(value = "{id}")
    public RoomType findRoomType(@PathVariable String id) {
        return roomTypeService.findRoomType(id);
    }

}
