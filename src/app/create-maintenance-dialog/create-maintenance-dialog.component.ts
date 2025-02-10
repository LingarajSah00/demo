import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

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
    private dialogRef: MatDialogRef<CreateMaintenanceDialogComponent>
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
}
