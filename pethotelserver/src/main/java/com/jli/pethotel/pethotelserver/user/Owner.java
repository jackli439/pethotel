package com.jli.pethotel.pethotelserver.user;

import com.jli.pethotel.pethotelserver.pet.Pet;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Owner extends User {

    public Owner() {
    }

    @OneToMany(cascade = CascadeType.ALL)
    private List<EmergencyContact> emergencyContacts;

    public List<EmergencyContact> getEmergencyContacts() {
        return emergencyContacts;
    }

    public void setEmergencyContacts(List<EmergencyContact> emergencyContacts) {
        this.emergencyContacts = emergencyContacts;
    }
}
