package com.jli.pethotel.pethotelserver.room;

import com.jli.pethotel.pethotelserver.model.BaseEntity;
import com.jli.pethotel.pethotelserver.pet.Pet;
import com.jli.pethotel.pethotelserver.room.roomType.RoomType;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.List;

@Entity
public class Room extends BaseEntity {

    public Room() {
    }

    @OneToOne
    private RoomType roomType;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Pet> pets;

    public RoomType getRoomType() {
        return roomType;
    }

    public void setRoomType(RoomType roomType) {
        this.roomType = roomType;
    }

    public List<Pet> getPets() {
        return pets;
    }

    public void setPets(List<Pet> pets) {
        this.pets = pets;
    }
}
