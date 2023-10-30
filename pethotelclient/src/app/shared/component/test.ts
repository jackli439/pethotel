// import { group } from '@angular/animations';
// import { Component } from '@angular/core';
// import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { BookingService } from '../../service/booking/booking.service';
// import { Room } from '../../model/room';
// import { EmergencyContact } from '../../model/emergencyContact';
// import { Pet } from '../../model/pet';
// import { RoomTypeService } from '../../service/roomType/room-type.service';
// import { RoomType } from '../../model/room-type';
// import { Booking } from '../../model/booking';

// @Component({
//   selector: 'app-booking-form',
//   templateUrl: './booking-form.component.html',
//   styleUrls: ['./booking-form.component.css'],
// })
// export class BookingFormComponent {
//   bookingForm: FormGroup;
//   // roomTypes: RoomType[];

//   constructor(
//     private formBuilder: FormBuilder,
//     private bookingService: BookingService,
//     private roomTypeService: RoomTypeService
//   ) {

//     this.bookingForm = this.setBookingForm()

//     this.bookingService.getBooking('1').subscribe((booking) => {
//       this.loadBooking(booking);
//     });
//   }

//   createEmergencyContactGroup(emergencyContact: EmergencyContact): FormGroup {
//     return this.formBuilder.group({
//       id: emergencyContact.id,
//       firstName: emergencyContact.firstName,
//       lastName: emergencyContact.lastName,
//       email: emergencyContact.email,
//       phoneNumber: emergencyContact.phoneNumber,
//     });
//   }

//   createRoomGroup(room: Room): FormGroup {
//     return this.formBuilder.group({
//       id: room.id,
//       roomType: room.roomType,
//       pets: this.formBuilder.array([]),
//     });
//   }

//   createPetGroup(pet: Pet): FormGroup {
//     return this.formBuilder.group({
//       id: pet.id,
//       name: pet.name,
//       age: pet.age,
//       spayedOrNeutered: pet.spayedOrNeutered,
//       petType: pet.petType,
//     });
//   }

//   private setBookingForm(): FormGroup {
    // return this.bookingForm = this.formBuilder.group({
    //   id: [],
    //   startDate: [],
    //   endDate: [],
    //   checkedIn: [],
    //   expired: [],
    //   owner: this.formBuilder.group({
        // id: [],
        // firstName: [],
        // lastName: [],
        // email: [],
        // phoneNumber: [],
        // emergencyContacts: this.formBuilder.array([]),
    //   }),
    //   rooms: this.formBuilder.array([]),
    // });
//   }

//   private loadBooking(booking: Booking) {
//     this.bookingForm.patchValue(booking);

//     this.loadEmergencyContacts(booking.owner.emergencyContacts);
//     this.loadRooms(booking.rooms);
//   }

//   private loadEmergencyContacts(emergencyContacts: EmergencyContact[]) {
//     emergencyContacts.forEach((contact) => {
//       const emergencyContactArray = this.bookingForm
//         .get('owner')
//         ?.get('emergencyContacts') as FormArray;
//       emergencyContactArray.push(this.createEmergencyContactGroup(contact as EmergencyContact));
//     });
//   }

//   private loadRooms(rooms: Room[]) {
//     rooms.forEach((room) => {
//       const roomArray = this.bookingForm.get('rooms') as FormArray;
//       const roomGroup = this.createRoomGroup(room);

//       room.pets.forEach((pet) => {
//         const petArray = roomGroup.get('pets') as FormArray;
//         const petGroup = this.createPetGroup(pet);
//         petArray.push(petGroup);
//       });

//       roomArray.push(roomGroup);
//     });
//   }


//   get emergencyContactsFormArray(): FormArray {
//     return this.bookingForm.get('owner')?.get('emergencyContacts') as FormArray
//   }

//   get roomsFormArray(): FormArray {
//     return this.bookingForm.get('rooms') as FormArray
//   }

// }
