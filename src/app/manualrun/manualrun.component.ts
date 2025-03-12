import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';  // Import MatTabsModule for tabs
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';  // Import the MatDatepicker module
import { MatNativeDateModule } from '@angular/material/core';  // Import the native date module
import { MatCheckboxModule } from '@angular/material/checkbox';

interface Run {
  id: number;
  email: string;
  audience: string;
  campaigns: string;
  dateRun: Date;
  notificationType: string;
}

import { MatSelectModule } from '@angular/material/select';

import { MatOptionModule } from '@angular/material/core';
import { ManualrundialogcomponentComponent } from '../manualrundialogcomponent/manualrundialogcomponent.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { PreviewdialogComponent } from '../previewdialog/previewdialog.component';
@Component({
  selector: 'app-manualrun',
  imports: [MatTabsModule,FormsModule,MatInputModule,CommonModule,MatFormFieldModule,MatSelectModule,MatOptionModule
    , MatDatepickerModule,  // Import MatDatepicker module
    MatNativeDateModule,MatCheckboxModule,MatTableModule,MatButtonModule,FormsModule,CommonModule
  ],
  templateUrl: './manualrun.component.html',
  styleUrl: './manualrun.component.css'
})
export class ManualrunComponent {
  displayedColumns: string[] = ['id', 'email', 'audience', 'campaigns', 'notificationType','dateRun'];
  dataSource = new MatTableDataSource<Run>([
    { id: 1, email: 'user1@example.com', audience: 'Audience 1', campaigns: 'Campaign 1', dateRun: new Date() ,notificationType: 'System'},
    { id: 2, email: 'user2@example.com', audience: 'Audience 2', campaigns: 'Campaign 2', dateRun: new Date() ,notificationType:'Manual',},
    { id: 3, email: 'user3@example.com', audience: 'Audience 3', campaigns: 'Campaign 3', dateRun: new Date() ,notificationType:'Manual',},
  ]);
  submittedData: any = null;  // Variable to hold the submitted data

 // Define the model to store form values
 formData = {
  adminEmail: '',
  targetAudience: [],  // For multiple select options
  targetAudienceAll: false,  // Checkbox for 'All'
  campaigns: [],  // For multiple select options
  campaignsAll: false,  // Checkbox for 'All'
  isTestRun: false  // Checkbox for 'Test Run'
};


   

  searchText: string = ''; // To store search text
  filteredData: Run[] = []; // Filtered data based on search text

  constructor(private dialog: MatDialog) {}

  // Filter data based on search text
  ngOnChanges() {
    this.filteredData = this.dataSource.data.filter((item) => 
      item.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.campaigns.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // Create Run button handler
  createRun() {
    const dialogRef = this.dialog.open(ManualrundialogcomponentComponent, {
      width: '1100px', // Set a fixed width (you can adjust this value)
      height: '500px', // Set a fixed height (you can adjust this value)
      maxWidth: 'none',   // Allow the dialog to take up 100% of the screen width
      data: { /* Pass the data for the form if needed */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //this.showConfirmationDialog();
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
// Optionally, handle 'Enter' key press
onEnter(event: KeyboardEvent): void {
  if (event.key === 'Enter') {
    this.onClick(); // Trigger submit when Enter is pressed
  }
}
 // Open the Preview Dialog when user clicks Submit
 onClick(): void {
  console.log('Form Data:', this.formData);

  // Prepare the data to pass to the dialog
  const dialogRef = this.dialog.open(PreviewdialogComponent, {
    width: '400px',  // Adjust width as needed
    data: this.formData  // Pass the formData to the dialog component

  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Handle submission logic here (e.g., save to the server)
      //this.submitData();
      //this.submittedData = this.formData;  // Store the data in submittedData

      this.openConfirmationDialog(result);

    }
  });
}

     // Open Confirmation Dialog when user clicks Submit
      openConfirmationDialog(userData: any): void {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
          width: '300px'
        });
      
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            // If confirmed, handle form submission
            //this.onSubmit(userData);  // Submit user data
            this.submittedData = this.formData;  // Store the data in submittedData

          }
        });
      
        
      }
      onSubmit(userData: any): void {
        // Logic to add the new user to the table or save to server
        const newUser: Run = {
          id: this.dataSource.data.length + 1,
          audience: userData.audience,
          email: userData.email,
          campaigns: userData.campaigns,
          notificationType: userData.notificationType,
          dateRun: userData.dateRun
        };
      }

      
}
