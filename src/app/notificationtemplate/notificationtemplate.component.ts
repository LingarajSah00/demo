import { Component ,ViewChild} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';  // For pagination
import { MatTableDataSource } from '@angular/material/table'; // For working with data source
import { MatSort } from '@angular/material/sort';  // Optional: For sorting
import { EditTemplateDialogComponent } from '../edit-template-dialog/edit-template-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { CreatenotificationtemplateComponent } from '../createnotificationtemplate/createnotificationtemplate.component';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { NotificationTemplateService } from '../service/notification-template.service';

interface UserData {
  id: number;
  name: string;
  email: string;
  status: string;
}
@Component({
  selector: 'app-notificationtemplate',
  imports: [    MatTableModule  ,   // Import MatTableModule for Angular Material Table
    MatButtonModule,  // Optional: To add buttons or actions
    MatIconModule,     // Optional: For adding icons (e.g., edit, delete)
    MatPaginatorModule, // For pagination
    MatInputModule,
    HttpClientModule
     ],
     providers: [NotificationTemplateService],
  templateUrl: './notificationtemplate.component.html',
  styleUrl: './notificationtemplate.component.css'
})

export class NotificationtemplateComponent {

    constructor(private notificationService: NotificationTemplateService,public dialog: MatDialog, private _snackBar: MatSnackBar) {}
  
  // Paginator reference to connect to the mat-paginator in the template
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // This is used for sorting (optional, if needed)
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [ 'name', 'email', 'status','actions']; // Define table column names
  dataSource = new MatTableDataSource<UserData>([
    { id: 1, name: 'Production', email: '2323323', status: 'To Compliance Annual Due' },
    { id: 2, name: 'Production', email: 'EMP_AN_DUE', status: 'To Employee Compliance Annual Due' },
    { id: 3, name: 'Production', email: '2323323', status: 'To Compliance Annual Due' },
    { id: 4, name: 'Production', email: 'STR_NH', status: 'To Store Compliance New Hire Welcome' },
    { id: 5, name: 'Production', email: '2323323', status: 'To Compliance Annual Due' }
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

  // When a row is clicked, open the edit dialog
  onRowClick(template: UserData): void {
    const dialogRef = this.dialog.open(EditTemplateDialogComponent, {
      width: '900px',
      height: '700px',
      maxWidth: '100%',  // Allow the dialog to take up 100% of the screen width

      data: template // Pass the clicked row data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // If dialog returns edited data, update the table data
        const index = this.dataSource.data.findIndex(item => item.id === result.id);
        if (index !== -1) {
          this.dataSource.data[index] = result; // Update the modified data
          this.dataSource._updateChangeSubscription(); // Refresh the table
        }
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

    openCreateUserDialog(): void {
        const dialogRef = this.dialog.open(CreatenotificationtemplateComponent, {
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
    email: userData.email,
    status: userData.status
  };
}

// // Get all templates
// loadTemplates(): void {
//   this.notificationService.getAllTemplates().subscribe(
//     (data) => {
//       this.templates = data;
//       console.log('Templates loaded:', this.templates);
//     },
//     (error) => {
//       console.error('Error loading templates:', error);
//     }
//   );
// } 

// // Search for a template by ID
// searchTemplateById(id: number): void {
//   this.notificationService.getTemplateById(id).subscribe(
//     (data) => {
//       this.selectedTemplate = data.length > 0 ? data[0] : null; // Assuming the response is an array
//       console.log('Selected Template:', this.selectedTemplate);
//     },
//     (error) => {
//       console.error('Error loading template by ID:', error);
//     }
//   );
// }
}
