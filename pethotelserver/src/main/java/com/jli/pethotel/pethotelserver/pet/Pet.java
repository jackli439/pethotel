package com.jli.pethotel.pethotelserver.pet;

import com.jli.pethotel.pethotelserver.model.BaseEntity;
import com.jli.pethotel.pethotelserver.task.Task;

import javax.persistence.*;
import java.util.List;

@Entity
public class Pet extends BaseEntity {

    public Pet() {
    }

    private String name;

    private int age;

    private boolean spayedOrNeutered;

    @Enumerated(EnumType.STRING)
    @Column
    private PetType petType;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public boolean isSpayedOrNeutered() {
        return spayedOrNeutered;
    }

    public void setSpayedOrNeutered(boolean spayedOrNeutered) {
        this.spayedOrNeutered = spayedOrNeutered;
    }

    public PetType getPetType() {
        return petType;
    }

    public void setPetType(PetType petType) {
        this.petType = petType;
    }

}
