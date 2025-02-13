import { Component, AfterViewInit,Inject,importProvidersFrom } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Import CUSTOM_ELEMENTS_SCHEMA if needed
import Quill from 'quill';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
declare var $: any;

interface TemplateData {
  id: number;
  name: string;
  email: string;
  status: string;
}
@Component({
  selector: 'app-edit-template-dialog',
  imports: [MatTableModule  ,   // Import MatTableModule for Angular Material Table
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
        FormsModule  ,CKEditorModule    ],
          // Import QuillModule


  templateUrl: './edit-template-dialog.component.html',
  styleUrl: './edit-template-dialog.component.css'
})
export class EditTemplateDialogComponent implements AfterViewInit{
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    console.log('Editor Initialized'); // Log to confirm initialization
  }

  saveChanges() {
  }

  cancel() {
    console.log('Cancelled');
  }

  ngAfterViewInit() {
    $('#element').tooltip();  // Initialize tooltip
    $('#summernote').summernote({
      height: 300,
      toolbar: [
        ['style', ['bold', 'italic', 'underline']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['para', ['ul', 'ol', 'paragraph']]
      ]
    });
  }
 
}
