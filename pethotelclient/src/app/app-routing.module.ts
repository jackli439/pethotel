import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { PetComponent } from './features/pet/pet.component';
import { BookingComponent } from './features/booking/booking.component';
import { BookingDetailComponent } from './features/booking-detail/booking-detail.component';
import { BookingFormComponent } from './shared/component/booking-form/booking-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'booking-detail/:id', component: BookingDetailComponent },
  { path: 'pet', component: PetComponent },
  { path: 'booking-form', component: BookingFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
