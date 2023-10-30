import { Owner } from './owner';
import { Room } from './room';

export interface Booking {
  id: string;
  startDate: string;
  endDate: string;
  checkedIn: boolean;
  expired: boolean;
  owner: Owner;
  rooms: Room[];
}
