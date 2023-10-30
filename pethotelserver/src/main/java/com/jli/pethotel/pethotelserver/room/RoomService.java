package com.jli.pethotel.pethotelserver.room;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class RoomService {

    RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public List<Room> findRooms() {
        return roomRepository.findAll();
    }

    public Room findRoom(String id) {
        return roomRepository.findById(Long.parseLong(id)).orElseThrow(
                () -> {
                    return new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Room with id %s not found", id));
                }
        );
    }

}
