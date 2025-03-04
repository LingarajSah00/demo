import { Component ,Type,ViewChild} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';  // For pagination
import { MatTableDataSource } from '@angular/material/table'; // For working with data source
import { MatSort } from '@angular/material/sort';  // Optional: For sorting
import { DownloaddialogComponent } from '../downloaddialog/downloaddialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as XLSX from 'xlsx';

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
    constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

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

  openDownloadDialog(): void {
      const dialogRef = this.dialog.open(DownloaddialogComponent, {
        width: '300px', // Adjust the width as needed
      });
  
      // Handle the dialog close event to determine download type
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.downloadData(result); // Pass the selected format to download the data
        }
      });
    }

    // Handle downloading data based on selected format
      downloadData(format: string): void {
        const data = this.dataSource.data; // Get data from the table
    
        if (format === 'csv') {
          this.downloadCSV(data);
        } else if (format === 'excel') {
          this.downloadExcel(data);
        }
      }
    
      // Download the data as CSV
      downloadCSV(data: any[]): void {
        const csvData = this.convertToCSV(data);
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'escalations.csv';
        a.click();
        window.URL.revokeObjectURL(url);
      }
    
      // Convert the data to CSV format
      convertToCSV(data: any[]): string {
        const header = Object.keys(data[0]);
        const rows = data.map((row) =>
          header.map((field) => `"${row[field]}"`).join(',')
        );
        return [header.join(','), ...rows].join('\n');
      }
    
      // Download the data as Excel (using a simple export approach)
      downloadExcel(data: any[]): void {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Templates');
        XLSX.writeFile(workbook, 'escalations.xlsx');
      }
}
