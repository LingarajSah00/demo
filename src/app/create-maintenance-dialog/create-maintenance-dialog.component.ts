import { Component } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-create-maintenance-dialog',
  imports: [MatDialogModule,
      MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
      MatSnackBarModule,
      FormsModule,
      MatSelectModule,
    ReactiveFormsModule,
  CommonModule],
  templateUrl: './create-maintenance-dialog.component.html',
  styleUrl: './create-maintenance-dialog.component.css'
})
export class CreateMaintenanceDialogComponent {
  maintenanceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateMaintenanceDialogComponent>,
    private dialog: MatDialog
  ) {
    this.maintenanceForm = this.fb.group({
      id: [null, Validators.required],
      type: ['', Validators.required],
      name: ['', Validators.required],
      emp_id: ['', Validators.required],
      title: ['', Validators.required],
      admin: ['', Validators.required],
      admin_id: ['', Validators.required],
      receive: ['', Validators.required],
      status: ['', Validators.required]
    });
  }
  getStatusControl() {
    return this.maintenanceForm.get('status');
  }
  // Submit the form
  submitForm(): void {
    if (this.maintenanceForm.valid) {
      const newMaintenance = this.maintenanceForm.value;
      this.dialogRef.close(newMaintenance); // Send data back to the parent component
    }
  }

  // Close the dialog without doing anything
  closeDialog(): void {
    this.dialogRef.close();
  }

    // Open the confirmation dialog before submitting
    openConfirmationDialog(): void {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent); // Open confirmation dialog
  
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.submitForm(); // If confirmed, submit the form
        } else {
          console.log('Form submission canceled'); // If canceled, do nothing
        }
      });
    }
}
