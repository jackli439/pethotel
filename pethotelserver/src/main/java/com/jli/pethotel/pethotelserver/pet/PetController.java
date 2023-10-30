package com.jli.pethotel.pethotelserver.pet;


import com.jli.pethotel.pethotelserver.pet.Pet;
import com.jli.pethotel.pethotelserver.pet.PetService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/pet")
public class PetController {


    PetService petService;

    public PetController(PetService petService) {
        this.petService = petService;
    }

    @GetMapping
    public List<Pet> findPets() {
        return petService.findPets();
    }

    @GetMapping(value = "{id}")
    public Pet findPet(@PathVariable String id) {
        return petService.findPet(id);
    }

}
