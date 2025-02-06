import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // <-- Import FormsModule here
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field'; // mat-label is part of MatFormFieldModule
import { MatIconModule } from '@angular/material/icon';  // Import MatIconModule

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,MatInputModule,MatFormFieldModule,ReactiveFormsModule,MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  showLoginForm: boolean = false;  // Controls visibility of the login form
  showAlert: boolean = false;
  alertType: string = 'error';  // Hardcoded alert type (error, success, etc.)
  alertMessage: string = 'Sorry, you do not have access to the application at this moment. Please try again later!';


  constructor(private authService: AuthService, private router: Router) {}

  
  //
  // This function will trigger the alert when the "Login to SSO" button is clicked
  onLoginSSO() {
    this.alertType = 'error';  // For error alert
  this.alertMessage = 'Sorry, you do not have access to the application at this moment. Please try again later!';

    // Set showAlert to true to display the red alert box
    this.showAlert = true;

    // Optionally, hide the alert after a few seconds
    setTimeout(() => {
      this.showAlert = false; // Hide the alert box after 5 seconds
    }, 5000); // 5000 ms = 5 seconds

     // Redirect to the dashboard after the alert is shown
     setTimeout(() => {
      this.router.navigateByUrl('/dashboard');  // Navigate to dashboard
    }, 1000);  // Delay the navigation by 1 second after showing the alert
  }
  onSubmit() {
 // Check the username and password (this example uses hardcoded values)
 const isAuthenticated = this.authService.login(this.username, this.password);
 if (isAuthenticated) {
   // Store token in localStorage and redirect to dashboard
   localStorage.setItem('authToken', 'isLoggedIn');
   this.router.navigateByUrl('/dashboard');
 } else {
   // Display error message if authentication fails
   this.errorMessage = 'Invalid username or password';
 }
  }
}
