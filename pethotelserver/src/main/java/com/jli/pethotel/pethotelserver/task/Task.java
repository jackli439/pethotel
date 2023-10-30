package com.jli.pethotel.pethotelserver.task;

import com.jli.pethotel.pethotelserver.model.BaseEntity;
import com.jli.pethotel.pethotelserver.pet.Pet;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
public class Task extends BaseEntity {

    public Task() {
    }

    private String name;

    private String description;

    private LocalDateTime alarm;

    private boolean isDone;

    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    private Pet pet;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getAlarm() {
        return alarm;
    }

    public void setAlarm(LocalDateTime alarm) {
        this.alarm = alarm;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }
}
