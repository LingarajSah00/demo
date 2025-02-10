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


interface UserData {
  id: number;
  type: string;
  name: string;

  emp_id: string;
  title: string;
  admin: string;
  admin_id: string;

  receive: string;

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

  displayedColumns: string[] = ['id', 'type', 'name', 'emp_id', 'title', 'admin', 'admin_id', 'receive', 'status', 'actions'];
  dataSource = new MatTableDataSource<UserData>([
    { id: 1, type: 'ETL',name:'Paul Russo', emp_id: '3232', title: 'EVP and Chief Medical Officer,CVS Health',admin: 'Nancy Gelinas',admin_id: '0022874' ,receive: 'yes'},
    { id: 1, type: 'ETL',name:'Paul Russo', emp_id: '3232', title: 'EVP and Chief Medical Officer,CVS Health',admin: 'Nancy Gelinas',admin_id: '0022874' ,receive: 'yes'},
    { id: 1, type: 'ETL',name:'Paul Russo', emp_id: '3232', title: 'EVP and Chief Medical Officer,CVS Health',admin: 'Nancy Gelinas',admin_id: '0022874' ,receive: 'yes'},
    { id: 1, type: 'ETL',name:'Paul Russo', emp_id: '3232', title: 'EVP and Chief Medical Officer,CVS Health',admin: 'Nancy Gelinas',admin_id: '0022874' ,receive: 'yes'},
    { id: 1, type: 'ETL',name:'Paul Russo', emp_id: '3232', title: 'EVP and Chief Medical Officer,CVS Health',admin: 'Nancy Gelinas',admin_id: '0022874' ,receive: 'yes'},

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
  




// Handle form submission
openCreateMaintenanceDialog(): void {
  const dialogRef = this.dialog.open(CreateMaintenanceDialogComponent);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Add the new maintenance record to the data source
      this.dataSource.data = [...this.dataSource.data, result];
      this._snackBar.open('Maintenance record added successfully!', 'Close', { duration: 3000 });
    }
  });
}

}
