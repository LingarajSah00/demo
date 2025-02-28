import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CreateMaintenanceDialogComponent } from '../create-maintenance-dialog/create-maintenance-dialog.component';
import { EdituserdialogComponent } from '../edituserdialog/edituserdialog.component';
import { NotificationService } from '../service/notification.service';
import { ELTData } from '../model/elt.model';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
    selector: 'app-exclusion',
    imports: [MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        FormsModule, HttpClientModule,MatSelectModule,MatTooltipModule],
    providers: [NotificationService],
    templateUrl: './exclusion.component.html',
    styleUrl: './exclusion.component.css'
})
export class ExclusionComponent {

    constructor(private notificationService: NotificationService,
        public dialog: MatDialog, private _snackBar: MatSnackBar) { }


    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    loading: boolean = false;

    displayedColumns: string[] = ['fullName', 'username', 'userTitle', 'adminFullName', 'personExceptionStatus', 'nmUpdate', 'dtUpdate', 'actions'];
    dataSource = new MatTableDataSource<ELTData>([
        { id: 1, fullName: 'Paul Russo', username: '3232', userTitle: 'EVP and Chief Medical Officer,CVS Health', adminFullName: 'Nancy Gelinas', adminId: '0022874', personExceptionStatus: 'Active', receiveDirectReportNotifications: '', blockAllNotifications: '', adminUsername: '', adminEmail: '', nmCreate: '', dtCreate: '', nmUpdate: '3234234', dtUpdate: '' },
        { id: 1, fullName: 'Paul Russo', username: '3232', userTitle: 'EVP and Chief Medical Officer,CVS Health', adminFullName: 'Nancy Gelinas', adminId: '0022874', personExceptionStatus: 'Active', receiveDirectReportNotifications: '', blockAllNotifications: '', adminUsername: '', adminEmail: '', nmCreate: '', dtCreate: '', nmUpdate: '3234234', dtUpdate: '' },
        { id: 1, fullName: 'Paul Russo', username: '3232', userTitle: 'EVP and Chief Medical Officer,CVS Health', adminFullName: 'Nancy Gelinas', adminId: '0022874', personExceptionStatus: 'Active', receiveDirectReportNotifications: '', blockAllNotifications: '', adminUsername: '', adminEmail: '', nmCreate: '', dtCreate: '', nmUpdate: '3234234', dtUpdate: '' },
        { id: 1, fullName: 'Paul Russo', username: '3232', userTitle: 'EVP and Chief Medical Officer,CVS Health', adminFullName: 'Nancy Gelinas', adminId: '0022874', personExceptionStatus: 'Active', receiveDirectReportNotifications: '', blockAllNotifications: '', adminUsername: '', adminEmail: '', nmCreate: '', dtCreate: '', nmUpdate: '3234234', dtUpdate: '' },
        { id: 1, fullName: 'Paul Russo', username: '3232', userTitle: 'EVP and Chief Medical Officer,CVS Health', adminFullName: 'Nancy Gelinas', adminId: '0022874', personExceptionStatus: 'Active', receiveDirectReportNotifications: '', blockAllNotifications: '', adminUsername: '', adminEmail: '', nmCreate: '', dtCreate: '', nmUpdate: '3234234', dtUpdate: '' },

    ]);

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.loadPersonExceptions();
    }



    openCreateMaintenanceDialog(): void {

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
                const index = this.dataSource.data.indexOf(element);
                if (index > -1) {
                    this.dataSource.data.splice(index, 1);
                    this.dataSource._updateChangeSubscription();
                    this._snackBar.open('Record deleted successfully!', 'Close', { duration: 3000 });
                }
            } else {
                console.log('Deletion canceled');
            }
        });
    }


    openEditUserDialog(user: ELTData): void {
    }


    loadPersonExceptions(): void {
        this.loading = true;
        this.notificationService.getPersonExceptions().subscribe(
            (data: ELTData[]) => {
                this.dataSource.data = data;
                this.loading = false;
            },
            (error: HttpErrorResponse) => {
                console.error('Error fetching person exceptions:', error);
                this._snackBar.open('Failed to load person exceptions', 'Close', { duration: 3000 });
                this.loading = false;
            }
        );
    }

    openSearchDialog(): void {
        const dialogRef = this.dialog.open(SearchDialogComponent, {
          width: '600px',
          height: '600px'

        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('Dialog closed');
          // Handle any actions you want after closing the dialog
        });
      }

      applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
        this.dataSource.filter = filterValue;
      }
}