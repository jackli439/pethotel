import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { Booking } from 'src/app/shared/model/booking';
import { Pet } from 'src/app/shared/model/pet';
import { Room } from 'src/app/shared/model/room';
import { RoomType } from 'src/app/shared/model/room-type';
import { BookingService } from 'src/app/shared/service/booking/booking.service';
import { PetService } from 'src/app/shared/service/pet/pet.service';
import { RoomService } from 'src/app/shared/service/room/room.service';
import { RoomTypeService } from 'src/app/shared/service/roomType/room-type.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
  @Input() bookings: Booking[] = null as any;
  @Input() pets: Pet[] = null as any;
  @Input() rooms: Room[] = null as any;
  @Input() roomTypes: RoomType[] = null as any;

  totalBookings: number = NaN;
  totalPets: number = NaN;
  totalRooms: number = NaN;

  ngOnChanges(changes: SimpleChanges) {
    let changesBookings = changes['bookings'];
    let changesPets = changes['pets'];
    let changesRooms = changes['rooms'];
    let changesRoomTypes = changes['roomTypes'];

    if (changesBookings && !changesBookings.isFirstChange()) {
      this.bookings = changesBookings.currentValue;
      this.totalBookings = this.bookings.length;
    }
    if (changesPets && !changesPets.isFirstChange()) {
      this.pets = changesPets.currentValue;
      this.totalPets = this.pets.length;
    }
    if (changesRooms && !changesRooms.isFirstChange()) {
      this.rooms = changesRooms.currentValue;
      this.totalRooms = this.rooms.length;
    }
    if (changesRoomTypes && !changesRoomTypes.isFirstChange()) {
      this.roomTypes = changesRoomTypes.currentValue;
    }
  }

  constructor() {}

  displayNumber(value: number): string {
    return isNaN(value) ? '-' : value.toString();
  }

  getCurrentRoomsTaken(roomType: RoomType): number {
    if (this.rooms === null) {
      return NaN;
    }
    return this.rooms.filter((room) => {
      return room.roomType.size === roomType.size;
    }).length;
  }
}
