package com.jli.pethotel.pethotelserver.user;

import com.jli.pethotel.pethotelserver.model.PersonEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User extends PersonEntity {
    public User() {
    }
}
