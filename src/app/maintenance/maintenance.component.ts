import { Component, ViewChild,ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';  // Import slide toggle module
import { FormsModule } from '@angular/forms';  // Import FormsModule here
import { CreateMaintenanceDialogComponent } from '../create-maintenance-dialog/create-maintenance-dialog.component';
import { EdituserdialogComponent } from '../edituserdialog/edituserdialog.component';


interface UserData {
  id: number;
  type: string;
  name: string;

  emp_id: string;
  title: string;
  admin: string;
  admin_id: string;

  receive: string;
  status: string;


}
@Component({
  selector: 'app-maintenance',
  imports: [ MatTableModule  ,   // Import MatTableModule for Angular Material Table
        MatButtonModule,  // Optional: To add buttons or actions
        MatIconModule,     // Optional: For adding icons (e.g., edit, delete)
        MatPaginatorModule, // For pagination
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        FormsModule],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.css'
})
export class MaintenanceComponent {

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

// Paginator reference to connect to the mat-paginator in the template
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // This is used for sorting (optional, if needed)
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [ 'type', 'name', 'emp_id', 'title', 'admin', 'admin_id', 'receive', 'status', 'actions'];
  dataSource = new MatTableDataSource<UserData>([
    { id: 1, type: 'ETL',name:'Paul Russo', emp_id: '3232', title: 'EVP and Chief Medical Officer,CVS Health',admin: 'Nancy Gelinas',admin_id: '0022874' ,receive: 'yes',status:'Active'},
    { id: 1, type: 'ETL',name:'Paul Russo', emp_id: '3232', title: 'EVP and Chief Medical Officer,CVS Health',admin: 'Nancy Gelinas',admin_id: '0022874' ,receive: 'yes',status:'Active'},
    { id: 1, type: 'ETL',name:'Paul Russo', emp_id: '3232', title: 'EVP and Chief Medical Officer,CVS Health',admin: 'Nancy Gelinas',admin_id: '0022874' ,receive: 'yes',status:'Active'},
    { id: 1, type: 'ETL',name:'Paul Russo', emp_id: '3232', title: 'EVP and Chief Medical Officer,CVS Health',admin: 'Nancy Gelinas',admin_id: '0022874' ,receive: 'yes',status:'Active'},
    { id: 1, type: 'ETL',name:'Paul Russo', emp_id: '3232', title: 'EVP and Chief Medical Officer,CVS Health',admin: 'Nancy Gelinas',admin_id: '0022874' ,receive: 'yes',status:'Active'},

  ]);


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;  // Optional: Enable sorting by columns
  }

  // Filter the table based on the input search text
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

   // Called when the status toggle is changed
   // Called when the status toggle is changed
  




openCreateMaintenanceDialog(): void {
  const dialogRef = this.dialog.open(CreateMaintenanceDialogComponent);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Add the new maintenance record to the data source
      this.dataSource.data = [...this.dataSource.data, result];
      this._snackBar.open('Maintenance record added successfully!', 'Close', { duration: 3000 });
    } else {
      console.log('Form submission canceled'); // If canceled, do nothing
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
}
