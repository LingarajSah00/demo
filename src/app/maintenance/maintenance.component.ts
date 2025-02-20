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
import { NotificationService } from '../service/notification.service';
import { ELTData } from '../model/elt.model';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Setting } from '../model/setting.model';
import { ListOption } from '../model/list-option.model';



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
        FormsModule,HttpClientModule],
         providers: [NotificationService], 
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.css'
})
export class MaintenanceComponent {

  constructor( private notificationService: NotificationService,
    public dialog: MatDialog, private _snackBar: MatSnackBar) {}

// Paginator reference to connect to the mat-paginator in the template
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // This is used for sorting (optional, if needed)
  @ViewChild(MatSort) sort!: MatSort;

  loading: boolean = false; // Flag to show loading state

  displayedColumns: string[] = [  'fullName', 'username', 'userTitle', 'adminFullName', 'adminId',  'personExceptionStatus', 'actions'];
  dataSource = new MatTableDataSource<ELTData>([
    { id: 1, fullName:'Paul Russo', username: '3232', userTitle: 'EVP and Chief Medical Officer,CVS Health',adminFullName: 'Nancy Gelinas',adminId: '0022874' ,personExceptionStatus:'Active',receiveDirectReportNotifications:'',blockAllNotifications:'',adminUsername:'',adminEmail:'',nmCreate:'',dtCreate:'',nmUpdate:'',dtUpdate:''},
    { id: 1, fullName:'Paul Russo', username: '3232', userTitle: 'EVP and Chief Medical Officer,CVS Health',adminFullName: 'Nancy Gelinas',adminId: '0022874' ,personExceptionStatus:'Active',receiveDirectReportNotifications:'',blockAllNotifications:'',adminUsername:'',adminEmail:'',nmCreate:'',dtCreate:'',nmUpdate:'',dtUpdate:''},
    { id: 1, fullName:'Paul Russo', username: '3232', userTitle: 'EVP and Chief Medical Officer,CVS Health',adminFullName: 'Nancy Gelinas',adminId: '0022874' ,personExceptionStatus:'Active',receiveDirectReportNotifications:'',blockAllNotifications:'',adminUsername:'',adminEmail:'',nmCreate:'',dtCreate:'',nmUpdate:'',dtUpdate:''},
    { id: 1, fullName:'Paul Russo', username: '3232', userTitle: 'EVP and Chief Medical Officer,CVS Health',adminFullName: 'Nancy Gelinas',adminId: '0022874' ,personExceptionStatus:'Active',receiveDirectReportNotifications:'',blockAllNotifications:'',adminUsername:'',adminEmail:'',nmCreate:'',dtCreate:'',nmUpdate:'',dtUpdate:''},
    { id: 1, fullName:'Paul Russo', username: '3232', userTitle: 'EVP and Chief Medical Officer,CVS Health',adminFullName: 'Nancy Gelinas',adminId: '0022874' ,personExceptionStatus:'Active',receiveDirectReportNotifications:'',blockAllNotifications:'',adminUsername:'',adminEmail:'',nmCreate:'',dtCreate:'',nmUpdate:'',dtUpdate:''},

  ]);
  secondTableColumns: string[] = [ 'name', 'securityRoles'];
  secondTableData = new MatTableDataSource<Setting>([
    {  name: 'John Doe',value:'', securityRoles: ['Admin'], canUpdate:true,valueDataType:'',nmCreate:'',dtCreate:'',nmUpdate:'',dtUpdate:'' },
    {  name: 'John Doe',value:'', securityRoles: ['Admin'], canUpdate:true,valueDataType:'',nmCreate:'',dtCreate:'',nmUpdate:'',dtUpdate:'' },
    {  name: 'John Doe',value:'', securityRoles: ['Admin'], canUpdate:true,valueDataType:'',nmCreate:'',dtCreate:'',nmUpdate:'',dtUpdate:'' },
    {  name: 'John Doe',value:'', securityRoles: ['Admin'], canUpdate:true,valueDataType:'',nmCreate:'',dtCreate:'',nmUpdate:'',dtUpdate:'' },

    // More data here...
  ]);

  // For third table (notifications)
  thirdTableColumns: string[] = ['id', 'name', 'value'];
  thirdTableData = new MatTableDataSource<ListOption>([
    { id:1, name: 'John Doe',value:'Active', displayText: '', nmCreate:'',dtCreate:'',nmUpdate:'',dtUpdate:'' },
    { id:1, name: 'John Doe',value:'Active', displayText: '', nmCreate:'',dtCreate:'',nmUpdate:'',dtUpdate:'' },
    { id:1, name: 'John Doe',value:'Active', displayText: '', nmCreate:'',dtCreate:'',nmUpdate:'',dtUpdate:'' },
    { id:1, name: 'John Doe',value:'Active', displayText: '', nmCreate:'',dtCreate:'',nmUpdate:'',dtUpdate:'' },

  ]); // Use Notification model for the third table


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;  // Optional: Enable sorting by columns
    //this.loadPersonExceptions();
    this.loadSettings();
    this.loadListOptions();



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

deleteRecord(element: ELTData): void {
  const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    data: {
      title: 'Confirm Deletion',
      message: `Are you sure you want to delete the record for ${element.fullName}?`
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


openEditUserDialog(user: ELTData): void {
  const dialogRef = this.dialog.open(EdituserdialogComponent, {
    width: '400px',
    data: { status: user.personExceptionStatus }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result !== undefined) { // Check if user has made a change
      // Open the confirmation dialog before submitting
      const confirmDialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '300px',
        data: {
          message: `Are you sure you want to submit the changes for ${user.fullName}?`
        }
      });

      confirmDialogRef.afterClosed().subscribe(confirmResult => {
        if (confirmResult) {
          // If confirmed, update the user status
          user.personExceptionStatus = result;
          this.dataSource._updateChangeSubscription(); // Refresh the table
          this._snackBar.open(`User status updated to ${user.personExceptionStatus}`, 'Close', { duration: 3000 });
        } else {
          // If canceled, revert changes or do nothing
          console.log(`Edit for ${user.fullName} was canceled.`);
        }
      });
    }
  });
}

 // Method to load all person exceptions from the API
 loadPersonExceptions(): void {
  this.loading = true; // Set loading to true while fetching data
  this.notificationService.getPersonExceptions().subscribe(
    (data: ELTData[]) => {
      this.dataSource.data = data; // Populate table with data
      this.loading = false; // Set loading to false after data is fetched
    },
    (error: HttpErrorResponse) => {
      console.error('Error fetching person exceptions:', error);
      this._snackBar.open('Failed to load person exceptions', 'Close', { duration: 3000 });
      this.loading = false; // Stop loading even in case of error
    }
  );
}

// Search for a specific person exception by username
searchPersonException(username: string): void {
  this.loading = true; // Set loading to true while searching
  this.notificationService.getPersonExceptionByUsername(username).subscribe(
    (data: ELTData[]) => {
      this.dataSource.data = data; // Populate table with search result
      this.loading = false; // Set loading to false after search is complete
    },
    (error: HttpErrorResponse) => {
      console.error('Error fetching person exception by username:', error);
      this._snackBar.open('Failed to find person exception by username', 'Close', { duration: 3000 });
      this.loading = false; // Stop loading even in case of error
    }
  );
}

// Method to load all settings data into the second table
loadSettings(): void {
  this.notificationService.getAllSettings().subscribe(
    (data: Setting[]) => {
      this.secondTableData.data = data; // Set the data for the second table
    },
    (error) => {
      console.error('Error fetching settings:', error);
    }
  );
}

// Method to search for a specific setting by its name
searchSettingByName(name: string): void {
  this.notificationService.getSettingByName(name).subscribe(
    (data: Setting) => {
      this.secondTableData.data = [data]; // Populate the table with the searched result
    },
    (error) => {
      console.error('Error fetching setting by name:', error);
    }
  );
}

 // Handle any action on the third table row (for example, edit)
 onNotificationActionClick(notification: Notification): void {
  console.log('Action clicked for notification:', notification);
}

 // Load list options data for the third table (list option values)
 loadListOptions(): void {
  this.notificationService.getAllListOptions().subscribe(
    (data: ListOption[]) => {
      this.thirdTableData.data = data;
    },
    (error) => {
      console.error('Error fetching list options:', error);
    }
  );
}

 // Search functionality for the third table
 searchListOptionByName(name: string): void {
  this.notificationService.getListOptionByName(name).subscribe(
    (data: ListOption) => {
      this.thirdTableData.data = [data];
    },
    (error) => {
      console.error('Error fetching list option by name:', error);
    }
  );
}
}
