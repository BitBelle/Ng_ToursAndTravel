import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SignupComponent, FormsModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit{

  constructor(private router: Router){}

  dropdownVisible: boolean = false;

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible
  }

  ngOnInit():void{

  }

  navigateToAuth(view: 'SIGNUP' | 'LOGIN') {
    const route = (view === 'SIGNUP') ? '/signup' : '/login';
    this.router.navigate([route]).then(() => {
      this.dropdownVisible = false;
    });
  }

}
