import { Component ,ViewChild} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';  // For pagination
import { MatTableDataSource } from '@angular/material/table'; // For working with data source
import { MatSort } from '@angular/material/sort';  // Optional: For sorting
import { CreateCampaignComponent } from '../create-campaign/create-campaign.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { EdituserdialogComponent } from '../edituserdialog/edituserdialog.component';

interface UserData {
  id: number;
  name: string;
  status: string;
}
@Component({
  selector: 'app-campaigns',
  imports: [MatTableModule  ,   // Import MatTableModule for Angular Material Table
    MatButtonModule,  // Optional: To add buttons or actions
    MatIconModule,     // Optional: For adding icons (e.g., edit, delete)
    MatPaginatorModule, // For pagination
    MatInputModule],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.css'
})
export class CampaignsComponent {
    constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}
  
// Paginator reference to connect to the mat-paginator in the template
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // This is used for sorting (optional, if needed)
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'name',  'status','actions']; // Define table column names
  dataSource = new MatTableDataSource<UserData>([
    { id: 1, name: 'campaign1',  status: 'ACTIVE' },
    { id: 2, name: 'campaign1',  status: 'ACTIVE' },
    { id: 3, name: 'campaign1',  status: 'ACTIVE' },
    { id: 4, name: 'campaign1',  status: 'ACTIVE' },
    { id: 5, name: 'campaign1',  status: 'ACTIVE' },
  ]);

  openCreateUserDialog(): void {
    const dialogRef = this.dialog.open(CreateCampaignComponent, {
      width: '400px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Open the confirmation dialog after user fills in the form
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
      this.onSubmit(userData);  // Submit user data
    }
  });

  
}

// Handle form submission
onSubmit(userData: any): void {
  // Logic to add the new user to the table or save to server
  const newUser: UserData = {
    id: this.dataSource.data.length + 1,
    name: userData.name,
    status: userData.status
  };

  // Add the new user to the table
  this.dataSource.data = [...this.dataSource.data, newUser];
  this._snackBar.open('User created successfully!', 'Close', { duration: 2000 });
}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;  // Optional: Enable sorting by columns
  }

  // Filter the table based on the input search text
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openEditUserDialog(user: UserData): void {
    const dialogRef = this.dialog.open(EdituserdialogComponent, {
      width: '400px',
      data: { status: user.status }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) { // Check if user has made a change
        // Open the confirmation dialog before submitting
        const confirmDialogRef = this.dialog.open(ConfirmationDialogComponent, {
          width: '300px',
          data: {
            message: `Are you sure you want to submit the changes for ${user.name}?`
          }
        });
  
        confirmDialogRef.afterClosed().subscribe(confirmResult => {
          if (confirmResult) {
            // If confirmed, update the user status
            user.status = result;
            this.dataSource._updateChangeSubscription(); // Refresh the table
            this._snackBar.open(`User status updated to ${user.status}`, 'Close', { duration: 3000 });
          } else {
            // If canceled, revert changes or do nothing
            console.log(`Edit for ${user.name} was canceled.`);
          }
        });
      }
    });
  }

  deleteRecord(element: UserData): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Confirm Deletion',
        message: `Are you sure you want to delete the record for ${element.name}?`
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Proceed with deletion if confirmed
        const index = this.dataSource.data.indexOf(element);
        if (index > -1) {
          this.dataSource.data.splice(index, 1);  // Remove the record from the dataSource
          this.dataSource._updateChangeSubscription();  // Refresh table view
          this._snackBar.open('Record deleted successfully!', 'Close', { duration: 3000 });
        }
      } else {
        console.log('Deletion canceled');
      }
    });
  }
}
