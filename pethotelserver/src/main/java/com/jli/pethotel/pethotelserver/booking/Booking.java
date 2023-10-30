package com.jli.pethotel.pethotelserver.booking;

import com.jli.pethotel.pethotelserver.model.BaseEntity;
import com.jli.pethotel.pethotelserver.room.Room;
import com.jli.pethotel.pethotelserver.user.Owner;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Booking extends BaseEntity {

    public Booking() {
    }

    private LocalDateTime startDate;

    private LocalDateTime endDate;

    private boolean checkedIn = false;

    private boolean expired = false;

    @OneToOne(cascade = CascadeType.ALL)
    private Owner owner;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Room> rooms;

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    public boolean isCheckedIn() {
        return checkedIn;
    }

    public void setCheckedIn(boolean checkedIn) {
        this.checkedIn = checkedIn;
    }

    public boolean isExpired() {
        return expired;
    }

    public void setExpired(boolean expired) {
        this.expired = expired;
    }

    public Owner getOwner() {
        return owner;
    }

    public void setOwner(Owner owner) {
        this.owner = owner;
    }

    public List<Room> getRooms() {
        return rooms;
    }

    public void setRooms(List<Room> rooms) {
        this.rooms = rooms;
    }
}
