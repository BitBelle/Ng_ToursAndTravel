import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  signUpForm!: FormGroup;
  signInForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  showSignUp: boolean = true;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {

    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')]]
    });

    //login
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(mode: 'SIGNUP' | 'LOGIN') {
    if (mode === 'SIGNUP' && this.signUpForm.valid) {
      const user = this.signUpForm.value;
      this.http.post('http://localhost:3000/users', user).subscribe(response => {
        this.successMessage = 'User signed up successfully';
        this.errorMessage = '';
        this.showSignUp = false; // Hide sign-up form after successful signup
        this.router.navigate(['/']);
      }, error => {
        this.successMessage = '';
        this.errorMessage = 'Error signing up. Please try again.';
      });

    } else if (mode === 'LOGIN' && this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      this.http.get<any[]>('http://localhost:3000/users').subscribe(users => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          this.successMessage = 'Login successful';
          this.errorMessage = 'Error loging in. Please try again.';
          // Optionally, you can navigate or perform actions after successful login
          this.router.navigate(['/']);
        } else {
          this.successMessage = '';
          this.errorMessage = 'Invalid email or password.';
        }
      }, error => {
        this.successMessage = 'Login successful';
        this.errorMessage = 'Error signing in. Please try again.';
      });
    } else {
      this.errorMessage = 'Please provide all required details.';
    }
  }

  toggleView(view: 'SIGNUP' | 'LOGIN') {
    this.showSignUp = (view === 'SIGNUP');
    // Optionally reset form fields or messages when toggling view
  }

}
