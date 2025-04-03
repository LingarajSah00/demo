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
import { MatButtonModule } from '@angular/material/button';
import { UserData } from '../model/user.model';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-login',
  imports: [MatSelectModule,CommonModule,FormsModule,CommonModule,MatInputModule,MatFormFieldModule,ReactiveFormsModule,MatIconModule,MatButtonModule],
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
  selectedRole: string = '';  // Store selected role
  roles: string[] = ['compuser','viewonly','superuser'];  // Define roles


  constructor(private authService: AuthService, private router: Router) {}

  currentUser: UserData = {
      userId: 'emplo000000000137158',
      username: '1468808',
      fullName: 'Brian Kearney',
      userStatus: 'Active',
      securityRoles: [
      
      ],
      email: 'abc@cvshealth.com',
      jobName: 'Mgr,Corp Compliance (IC)',
      orgName: 'Compliance / Industry Integrity Corp Compliance'
    };
  
  //
  // This function will trigger the alert when the "Login to SSO" button is clicked
  onLoginSSO() {
    this.currentUser.securityRoles = [this.selectedRole];  // Update securityRoles array

    localStorage.setItem('currentUserRole', JSON.stringify(this.currentUser));

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
    this.currentUser.securityRoles = [this.selectedRole];  // Update securityRoles array

 // Check the username and password (this example uses hardcoded values)
 const isAuthenticated = this.authService.login(this.username, this.password);
 if (isAuthenticated) {

   // Store token in localStorage and redirect to dashboard
   localStorage.setItem('authToken', 'isLoggedIn');
   localStorage.setItem('currentUserRole', JSON.stringify(this.currentUser));

   this.router.navigateByUrl('/dashboard');
 } else {
   // Display error message if authentication fails
   this.errorMessage = 'Invalid username or password';
 }
  }
}
