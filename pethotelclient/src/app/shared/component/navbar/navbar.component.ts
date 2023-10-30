import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private route: ActivatedRoute) {}

  routes = [
    { name: 'Dashboard', path: 'dashboard' },
    { name: 'Bookings', path: 'booking' },
    { name: 'Pets', path: 'pet' },
  ];
}
