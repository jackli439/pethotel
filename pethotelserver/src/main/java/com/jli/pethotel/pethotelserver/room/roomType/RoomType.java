package com.jli.pethotel.pethotelserver.room.roomType;

import com.jli.pethotel.pethotelserver.model.BaseEntity;

import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;

@Entity
public class RoomType extends BaseEntity {

    @NotBlank
    private String size;

    private double price;

    private int maxAvailable;

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getMaxAvailable() {
        return maxAvailable;
    }

    public void setMaxAvailable(int maxAvailable) {
        this.maxAvailable = maxAvailable;
    }
}
