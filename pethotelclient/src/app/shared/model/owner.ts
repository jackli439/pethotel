import { EmergencyContact } from './emergencyContact';
import { Pet } from './pet';

export interface Owner {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  emergencyContacts: EmergencyContact[];
}
