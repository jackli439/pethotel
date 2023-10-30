package com.jli.pethotel.pethotelserver.pet;

import com.jli.pethotel.pethotelserver.pet.Pet;
import com.jli.pethotel.pethotelserver.pet.PetRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class PetService {

    PetRepository petRepository;

    public PetService(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    public List<Pet> findPets() {
        return petRepository.findAll();
    }

    public Pet findPet(String id) {
        return petRepository.findById(Long.parseLong(id)).orElseThrow(
                () -> {
                    return new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Pet with id %s not found", id));
                }
        );
    }

}
