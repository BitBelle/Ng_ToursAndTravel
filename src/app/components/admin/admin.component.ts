import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tour } from '../../models/tour.model';
import { ToursService } from '../../services/tour/tour.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ToursComponent } from '../tours/tours.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule,CommonModule, FormsModule,ToursComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{

  showPackageForm: boolean = false;
  dropdownVisible: boolean = false;

  tour: Tour = {
    tour_Name: '',
    tour_Destination: '',
    tour_Description: '',
    tour_Price: 0,
    id: '',
    isDeleted: 0
  };

  tours: Tour[] = [];
  addTourForm!: FormGroup;
  btnText: string = 'Add Tour';
  tour_Id!: string;

  constructor(private fb: FormBuilder, private toursService: ToursService) {}

  ngOnInit(): void {
    this.addTourForm = this.fb.group({
      tour_Name: [null, Validators.required],
      tour_Destination: [null, Validators.required],
      tour_Description: [null, Validators.required],
      tour_Price: [null, [Validators.required]]
    });

    this.loadTours();
  }

  loadTours(): void {
    this.toursService.getAllTours().subscribe(toursArray => {
      this.tours = toursArray;
    });
  }

  addTour(): void {
    const addTour: Tour = {
      tour_Name: this.addTourForm.value.tour_Name,
      tour_Destination: this.addTourForm.value.tour_Destination,
      tour_Description: this.addTourForm.value.tour_Description,
      tour_Price: this.addTourForm.value.tour_Price,
      id: '',
      isDeleted: 0
    };

    this.toursService.addTour(addTour).subscribe(res => {
      console.log('Tour added successfully:', res);
      // this.loadTours();
      this.addTourForm.reset();
    });
  }

  deleteTour(id: string): void {
    this.toursService.deleteTour(id).subscribe(res => {
      console.log('Tour deleted successfully:', res);
      this.loadTours();
    });
  }

  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  toggleManagePackages(): void {
    this.showPackageForm = !this.showPackageForm;
  }

  closeForm(): void {
    this.showPackageForm = false;
  }

}
