import { Pet } from './pet';
import { RoomType } from './room-type';

export interface Room {
  id: string;
  roomType: RoomType;
  pets: Pet[];
}
