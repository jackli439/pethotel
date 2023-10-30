package com.jli.pethotel.pethotelserver.room.roomType;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class RoomTypeService {

    RoomTypeRepository roomTypeRepository;

    public RoomTypeService(RoomTypeRepository roomTypeRepository) {
        this.roomTypeRepository = roomTypeRepository;
    }

    public List<RoomType> findRoomTypes() {
        return roomTypeRepository.findAll();
    }

    public RoomType findRoomType(String id) {
        return roomTypeRepository.findById(Long.parseLong(id)).orElseThrow(
                () -> {
                    return new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("RoomType with id %s not found", id));
                }
        );
    }

}
