import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';  // Import MatDialogModule

@Component({
  selector: 'app-confirmation-dialog',
  imports: [MatDialogModule],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.css'
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>
  ) { }

  onNoClick(): void {
    this.dialogRef.close(false);  // Close the dialog with a false result
  }

  onYesClick(): void {
    this.dialogRef.close(true);  // Close the dialog with a true result
  }
}
