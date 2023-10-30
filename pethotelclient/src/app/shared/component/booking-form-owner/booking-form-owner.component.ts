import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-booking-form-owner',
  templateUrl: './booking-form-owner.component.html',
  styleUrls: ['./booking-form-owner.component.css']
})
export class BookingFormOwnerComponent {

  @Input() ownerForm!: FormGroup

  constructor() {
  }
}
