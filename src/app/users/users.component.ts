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
import { EdituserdialogComponent } from '../edituserdialog/edituserdialog.component';
import { HttpClientModule } from '@angular/common/http';
import { UserserviceService } from '../userservice.service';
import { HttpClient } from '@angular/common/http';


interface UserData {
  userId: string;
  username: string;
  fullName: string;
  userStatus: string;
  roles: string[];
  jobName: string;
  orgName: string;
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
      FormsModule,HttpClientModule],
      providers: [UserserviceService],  // Provide UserService here explicitly

  templateUrl: './users.component.html',
  styleUrl: './users.component.css'

})
export class UsersComponent {

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar,    private userService: UserserviceService // Inject the UserService
) {}

// Paginator reference to connect to the mat-paginator in the template
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // This is used for sorting (optional, if needed)
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['username', 'name', 'email', 'role','status','actions']; // Define table column names
  dataSource = new MatTableDataSource<UserData>([
    { userId: '1', username: '9906504',fullName:'Paul Russo',  userStatus: 'Active' ,roles:['Admin'],jobName:'Admin',orgName:'Admin'},
    { userId: '1', username: '9906504',fullName:'Paul Russo',  userStatus: 'Active' ,roles:['Admin'],jobName:'Admin',orgName:'Admin'},
    { userId: '1', username: '9906504',fullName:'Paul Russo',  userStatus: 'Active' ,roles:['Admin'],jobName:'Admin',orgName:'Admin'},
    { userId: '1', username: '9906504',fullName:'Paul Russo',  userStatus: 'Active' ,roles:['Admin'],jobName:'Admin',orgName:'Admin'},
    { userId: '1', username: '9906504',fullName:'Paul Russo',  userStatus: 'Active' ,roles:['Admin'],jobName:'Admin',orgName:'Admin'},

  ]);


  ngOnInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;  // Optional: Enable sorting by columns
    this.loadUsers(); // Fetch users when component is initialized

  }

  // Filter the table based on the input search text
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

   // Called when the status toggle is changed
   // Called when the status toggle is changed
  onStatusChange(user: UserData): void {
    // Open a confirmation dialog before changing the status
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: {
        message: `Are you sure you want to change the status of ${user.username}?`
      }
    });

    // After the confirmation dialog is closed
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // If confirmed, change the status
        user.userStatus = user.userStatus === 'Active' ? 'Active' : 'Inactive';
        this.dataSource._updateChangeSubscription(); // Refresh the table
        this._snackBar.open(`User status changed to ${user.userStatus}`, 'Close', { duration: 2000 });
      } else {
        // If canceled, revert the change or do nothing
        console.log(`Status change for ${user.username} was canceled.`);
      }
    });
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
    userId: userData.userId,
    username: userData.username,
    fullName: userData.name,
    userStatus: userData.status,
    roles: userData.role,
    orgName: userData.orgName,
    jobName: userData.jobName
  };

  // Add the new user to the table
  this.dataSource.data = [...this.dataSource.data, newUser];
  this._snackBar.open('User created successfully!', 'Close', { duration: 2000 });
}


openEditUserDialog(user: UserData): void {
  const dialogRef = this.dialog.open(EdituserdialogComponent, {
    width: '400px',
    data: { status: user.userStatus }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result !== undefined) { // Check if user has made a change
      // Open the confirmation dialog before submitting
      const confirmDialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '300px',
        data: {
          message: `Are you sure you want to submit the changes for ${user.username}?`
        }
      });

      confirmDialogRef.afterClosed().subscribe(confirmResult => {
        if (confirmResult) {
          // If confirmed, update the user status
          user.userStatus = result;
          this.dataSource._updateChangeSubscription(); // Refresh the table
          this._snackBar.open(`User status updated to ${user.userStatus}`, 'Close', { duration: 3000 });
        } else {
          // If canceled, revert changes or do nothing
          console.log(`Edit for ${user.username} was canceled.`);
        }
      });
    }
  });
}


  // Fetch all users
  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data: UserData[]) => {
        this.dataSource.data = data; // Update data source
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.error('Error fetching user data', error);
        this._snackBar.open('Error fetching users', 'Close', { duration: 3000 });
      }
    );
  }

  // Search for users based on path variable
  searchUser(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    if (filterValue) {
      this.userService.searchUser(filterValue).subscribe(
        (data: UserData[]) => {
          this.dataSource.data = data; // Update the data table with search results
        },
        error => {
          console.error('Error searching for user', error);
          this._snackBar.open('Error searching users', 'Close', { duration: 3000 });
        }
      );
    } else {
      this.loadUsers(); // If no search query, load all users
    }
  }

}
