package com.jli.pethotel.pethotelserver;

import com.github.javafaker.Faker;
import com.github.javafaker.Food;
import com.jli.pethotel.pethotelserver.booking.Booking;
import com.jli.pethotel.pethotelserver.booking.BookingRepository;
import com.jli.pethotel.pethotelserver.pet.Pet;
import com.jli.pethotel.pethotelserver.pet.PetRepository;
import com.jli.pethotel.pethotelserver.pet.PetType;
import com.jli.pethotel.pethotelserver.room.Room;
import com.jli.pethotel.pethotelserver.room.RoomRepository;
import com.jli.pethotel.pethotelserver.room.roomType.RoomType;
import com.jli.pethotel.pethotelserver.room.roomType.RoomTypeRepository;
import com.jli.pethotel.pethotelserver.task.Task;
import com.jli.pethotel.pethotelserver.task.TaskRepository;
import com.jli.pethotel.pethotelserver.user.EmergencyContact;
import com.jli.pethotel.pethotelserver.user.Owner;
import com.jli.pethotel.pethotelserver.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.*;
import java.util.concurrent.TimeUnit;

@SpringBootApplication
public class PethotelserverApplication {

	public static void main(String[] args) {
		SpringApplication.run(PethotelserverApplication.class, args);
	}

	@Autowired
	BookingRepository bookingRepository;

	@Autowired
	RoomTypeRepository roomTypeRepository;

	@Autowired
	TaskRepository taskRepository;
	@Bean
	public CommandLineRunner demo() {
		return (args) -> {

			RoomType rt1 = new RoomType();
			rt1.setSize("large");
			rt1.setPrice(125.0);
			rt1.setMaxAvailable(64);
			roomTypeRepository.save(rt1);

			RoomType rt2 = new RoomType();
			rt2.setSize("small");
			rt2.setPrice(75.0);
			rt2.setMaxAvailable(64);
			roomTypeRepository.save(rt2);

			List<Task> taskList = new ArrayList<>();

			int numberOfBookings = 30;
			int maxNumberOfPets = 4;

			Faker faker = new Faker();
			for (int i = 0; i < numberOfBookings; i++) {

				Random random1 = new Random();
				List<Pet> pets = new ArrayList<>();
				for (int j = 0; j < random1.nextInt(maxNumberOfPets + 1) + 1; j++) {
					Pet p1 = new Pet();
					p1.setName(faker.funnyName().name());
					p1.setAge(faker.number().numberBetween(1,20));
					p1.setSpayedOrNeutered(faker.bool().bool());
					p1.setPetType(PetType.values()[new Random().nextInt(PetType.values().length)]);

					pets.add(p1);

					Task t = new Task();
					t.setAlarm(LocalDateTime.now());
					t.setName(String.format("Feed %s", faker.food().dish()));
					t.setDescription(String.format("Amount %s", faker.food().measurement()));
					t.setDone(false);
					t.setPet(p1);

					taskList.add(t);

				}
				List<List<Pet>> partitionedPets = partitionList(2, pets);
				List<Room> rooms = new ArrayList<>();
				for(List<Pet> petList : partitionedPets) {
					Room r1 = new Room();
					r1.setRoomType(new Random().nextBoolean() ? rt1 : rt2);
					r1.setPets(petList);
					rooms.add(r1);
				}

				EmergencyContact e1 = new EmergencyContact();
				e1.setEmail(faker.internet().emailAddress());
				e1.setFirstName(faker.name().firstName());
				e1.setLastName(faker.name().firstName());
				e1.setPhoneNumber(faker.phoneNumber().phoneNumber());

				EmergencyContact e2 = new EmergencyContact();
				e2.setFirstName(faker.name().firstName());
				e2.setLastName(faker.name().firstName());
				e2.setPhoneNumber(faker.phoneNumber().phoneNumber());

				Owner o = new Owner();
				o.setFirstName(faker.name().firstName());
				o.setLastName(faker.name().lastName());
				o.setEmail(faker.internet().emailAddress());
				o.setPhoneNumber(faker.phoneNumber().phoneNumber());
				o.setEmergencyContacts(Arrays.asList(e1, e2));


				Date d1 = faker.date().past(7, TimeUnit.DAYS);
				Date startDate = faker.date().future(7, TimeUnit.DAYS, d1);
				Date endDate = faker.date().future(7, TimeUnit.DAYS, startDate);

				LocalDateTime now = LocalDateTime.now();

				LocalDateTime startDateConv = startDate.toInstant()
						.atZone(ZoneId.systemDefault())
						.toLocalDateTime();
				LocalDateTime endDateConv = endDate.toInstant()
						.atZone(ZoneId.systemDefault())
						.toLocalDateTime();


				Booking b = new Booking();
				b.setStartDate(startDateConv);
				b.setEndDate(endDateConv);
				b.setOwner(o);
				b.setRooms(rooms);
				b.setCheckedIn(startDateConv.isBefore(now));
				b.setExpired(endDateConv.isBefore(now));
				bookingRepository.save(b);
			}

			taskRepository.saveAll(taskList);
		};
	}

	public static List<List<Pet>> partitionList(int partitionSize, List<Pet> originalList) {
		List<List<Pet>> partitions = new LinkedList<List<Pet>>();
		for (int i = 0; i < originalList.size(); i += partitionSize) {
			partitions.add(originalList.subList(i,
					Math.min(i + partitionSize, originalList.size())));
		}
		return partitions;
	}
}
