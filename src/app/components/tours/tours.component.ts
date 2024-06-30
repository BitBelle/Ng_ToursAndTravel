import { Component, OnInit } from '@angular/core';
import { Tour } from '../../models/tour.model';
import { ToursService } from '../../services/tour/tour.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Hotel } from '../../models/hotel.model';
import { HotelService } from '../../services/hotel/hotel.service';
import { BookingService } from '../../services/booking/booking.service';



@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})


export class ToursComponent{
  Tours: Tour[] = [];
  Hotels:Hotel[] = [];
  HotelById: Hotel[] = [];

  user_Id!: string
  tour_Id!: string
  tour_Name: string = ' '
  tour_Destination!: string
  user!: string;
  

  constructor(private fb: FormBuilder, private toursService: ToursService, private hotelService: HotelService, private bookingService: BookingService) {

  }

  ngOnInit(): void {
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      this.user = JSON.parse(userString);

    }

    this.toursService.getAllTours().subscribe((tours: Tour[]) => {
      this.Tours = tours
    })
  }
}
