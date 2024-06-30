import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signUpForm: FormGroup;
  loginForm: FormGroup;
  showSignUp = false;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')
      ]]
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(formType: string): void {
    if (formType === 'SIGNUP' && this.signUpForm.valid) {
      console.log('Sign Up Form Data:', this.signUpForm.value);
      // Implement sign-up logic here
      this.showSignUp = false; // Hide sign-up form and show login form
    } else if (formType === 'LOGIN' && this.loginForm.valid) {
      console.log('Login Form Data:', this.loginForm.value);
      // Implement login logic here
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
    }
  }
}
