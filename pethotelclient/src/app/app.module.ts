import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { BookingComponent } from './features/booking/booking.component';
import { PetComponent } from './features/pet/pet.component';
import { StatisticsComponent } from './features/statistics/statistics.component';
import { QuickCheckInComponent } from './features/quick-check-in/quick-check-in.component';
import { BookingDetailComponent } from './features/booking-detail/booking-detail.component';
import { BookingFormComponent} from './shared/component/booking-form/booking-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { BookingFormOwnerComponent } from './shared/component/booking-form-owner/booking-form-owner.component';
import { BookingFormRoomsComponent } from './shared/component/booking-form-rooms/booking-form-rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    BookingComponent,
    PetComponent,
    StatisticsComponent,
    QuickCheckInComponent,
    BookingDetailComponent,
    BookingFormComponent,
    BookingFormOwnerComponent,
    BookingFormRoomsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
