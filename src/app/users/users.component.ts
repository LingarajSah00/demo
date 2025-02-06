import { Component, ViewChild } from '@angular/core';
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


interface UserData {
  id: number;
  name: string;
  username: string;

  email: string;
  status: string;
}
@Component({
  selector: 'app-users',
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
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

// Paginator reference to connect to the mat-paginator in the template
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // This is used for sorting (optional, if needed)
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id','username', 'name', 'email', 'status','actions']; // Define table column names
  dataSource = new MatTableDataSource<UserData>([
    { id: 1, username: '9906504',name:'Paul Russo', email: 'Paul.Russo2@cvshealth.com', status: 'Active' },
    { id: 2, username: '9906504',name:'Paul Russo', email: 'Paul.Russo2@cvshealth.com', status: 'Active' },
    { id: 3, username: '9906504',name:'Paul Russo', email: 'Paul.Russo2@cvshealth.com', status: 'Active' },
    { id: 4, username: '9906504',name:'Paul Russo', email: 'Paul.Russo2@cvshealth.com', status: 'Active' },
    { id: 5, username: '9906504',name:'Paul Russo', email: 'Paul.Russo2@cvshealth.com', status: 'Active' },

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
   onStatusChange(user: UserData): void {
    if (user.status === 'Active') {
      user.status = 'Active';
    } else {
      user.status = 'Inactive';
    }

    this.dataSource._updateChangeSubscription();  // Refresh the table
    // You can also update the status in the backend if needed
    console.log(`User ${user.username} status changed to ${user.status}`);
  }

// Open Create User Dialog
openCreateUserDialog(): void {
  const dialogRef = this.dialog.open(CreateUserDialogComponent, {
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
    username: userData.username,
    name: userData.name,
    email: userData.email,
    status: userData.status
  };

  // Add the new user to the table
  this.dataSource.data = [...this.dataSource.data, newUser];
  this._snackBar.open('User created successfully!', 'Close', { duration: 2000 });
}
}
