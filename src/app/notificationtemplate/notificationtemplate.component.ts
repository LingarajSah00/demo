import { Component ,ViewChild} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';  // For pagination
import { MatTableDataSource } from '@angular/material/table'; // For working with data source
import { MatSort } from '@angular/material/sort';  // Optional: For sorting

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
    MatInputModule
     ],
  templateUrl: './notificationtemplate.component.html',
  styleUrl: './notificationtemplate.component.css'
})

export class NotificationtemplateComponent {
  // Paginator reference to connect to the mat-paginator in the template
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // This is used for sorting (optional, if needed)
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'name', 'email', 'status','actions']; // Define table column names
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
}
