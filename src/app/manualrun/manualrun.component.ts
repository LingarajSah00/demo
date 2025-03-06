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
@Component({
  selector: 'app-manualrun',
  imports: [MatTabsModule,FormsModule,MatInputModule,CommonModule,MatFormFieldModule,MatSelectModule,MatOptionModule
    , MatDatepickerModule,  // Import MatDatepicker module
    MatNativeDateModule,MatCheckboxModule,MatTableModule,MatButtonModule
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
   // this.dataSource.filter = filterValue;
  }

}
