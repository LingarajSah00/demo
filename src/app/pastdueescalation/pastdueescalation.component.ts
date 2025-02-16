import { Component ,Type,ViewChild} from '@angular/core';
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
  assignType: string;
dateNeeded: string;
dateCompleted: string;
escalationDate: string;
week: string;
sendStatus: string;
template: string;

}
@Component({
  selector: 'app-pastdueescalation',
  imports: [ MatTableModule  ,   // Import MatTableModule for Angular Material Table
    MatButtonModule,  // Optional: To add buttons or actions
    MatIconModule,     // Optional: For adding icons (e.g., edit, delete)
    MatPaginatorModule, // For pagination
    MatInputModule],
  templateUrl: './pastdueescalation.component.html',
  styleUrl: './pastdueescalation.component.css'
})
export class PastdueescalationComponent {
 // Paginator reference to connect to the mat-paginator in the template
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // This is used for sorting (optional, if needed)
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [ 'name', 'email', 'status','assignType','dateNeeded','dateCompleted','escalationDate','week','sendStatus','template','actions']; // Define table column names
  dataSource = new MatTableDataSource<UserData>([
    { id: 1, name: 'Production', email: '2323323', status: 'To Compliance Annual Due',assignType:'NEW',dateNeeded:'12/25/2024',dateCompleted:'',escalationDate:'01/29/2025',week:'6',sendStatus:'SENT',template:'SUP_PD' },
    { id: 2, name: 'Production', email: '2323323', status: 'To Compliance Annual Due',assignType:'NEW',dateNeeded:'12/25/2024',dateCompleted:'',escalationDate:'01/29/2025',week:'6',sendStatus:'SENT',template:'SUP_PD' },
    { id: 3, name: 'Production', email: '2323323', status: 'To Compliance Annual Due',assignType:'NEW',dateNeeded:'12/25/2024',dateCompleted:'',escalationDate:'01/29/2025',week:'6',sendStatus:'SENT',template:'SUP_PD' },
    { id: 4, name: 'Production', email: '2323323', status: 'To Compliance Annual Due',assignType:'NEW',dateNeeded:'12/25/2024',dateCompleted:'',escalationDate:'01/29/2025',week:'6',sendStatus:'SENT',template:'SUP_PD' },
    { id: 5, name: 'Production', email: '2323323', status: 'To Compliance Annual Due',assignType:'NEW',dateNeeded:'12/25/2024',dateCompleted:'',escalationDate:'01/29/2025',week:'6',sendStatus:'SENT',template:'SUP_PD' },
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
