import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel.model';
import { HotelService } from '../../services/hotel/hotel.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})


export class HotelsComponent{
  hotels: Hotel[] = []

  constructor(private hotelService:HotelService){

  }

  // ngOnInit(): void{
  //   this.hotels = this.hotelService.getHotels()
  // }


}
