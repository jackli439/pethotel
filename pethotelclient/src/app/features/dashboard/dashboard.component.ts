import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/shared/model/booking';
import { Pet } from 'src/app/shared/model/pet';
import { Room } from 'src/app/shared/model/room';
import { RoomType } from 'src/app/shared/model/room-type';
import { BookingService } from 'src/app/shared/service/booking/booking.service';
import { PetService } from 'src/app/shared/service/pet/pet.service';
import { RoomService } from 'src/app/shared/service/room/room.service';
import { RoomTypeService } from 'src/app/shared/service/roomType/room-type.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  bookings: Booking[] = null as any;
  pets: Pet[] = null as any;
  rooms: Room[] = null as any;
  roomTypes: RoomType[] = null as any;

  ngOnInit() {
    this.getBookings();
    this.getPets();
    this.getRooms();
    this.getRoomTypes();
  }

  constructor(
    private bookingService: BookingService,
    private petService: PetService,
    private roomService: RoomService,
    private roomTypeService: RoomTypeService
  ) {}

  private getBookings() {
    this.bookingService.getBookings().subscribe((bookings) => {
      this.bookings = bookings;
    });
  }

  private getPets() {
    this.petService.getPets().subscribe((pets) => {
      this.pets = pets;
    });
  }

  private getRooms() {
    this.roomTypeService.getRoomTypes().subscribe((roomTypes) => {
      this.roomTypes = roomTypes;
    });
  }

  private getRoomTypes() {
    this.roomService.getRooms().subscribe((rooms) => {
      this.rooms = rooms;
    });
  }

  displayNumber(value: number): string {
    return isNaN(value) ? '-' : value.toString();
  }

  getCurrentRoomsTaken(roomType: RoomType): number {
    return this.rooms.filter((room) => {
      return room.roomType.size === roomType.size;
    }).length;
  }
}
