import { Component, AfterViewInit,Inject,ViewChild, ElementRef ,importProvidersFrom } from '@angular/core';
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
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';  // Import the module
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule
import Quill from 'quill';
import 'quill-table';


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
        FormsModule  ,CKEditorModule,MatTooltipModule  ,FormsModule,AngularEditorModule,HttpClientModule  ],
          // Import QuillModule


  templateUrl: './edit-template-dialog.component.html',
  styleUrl: './edit-template-dialog.component.css'
})
export class EditTemplateDialogComponent implements AfterViewInit{
  editor: any;  // Quill editor instance
  @ViewChild('editorContainer') editorContainer!: ElementRef;

  htmlContent: string = '';  // Editor content
  config = {
    editable: true,
    spellcheck: true,
    height: '200px',  // Customize height
    minHeight: '100px',
    placeholder: 'Enter your content here...',
  };

  // You can log the content or save it as needed
  saveContent() {
    
    console.log('Saved Content:', this.htmlContent);
  }

 
  constructor(
    public dialogRef: MatDialogRef<EditTemplateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('Editor Initialized'); // Log to confirm initialization
    this.htmlContent = '<p>Editor is ready!</p>';

  }
 

   

  // Save changes to the editor content
  saveChanges() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to save the changes?' }  // Pass a custom message to the dialog
    });
  
    // After the confirmation dialog is closed
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Saved Content:', this.htmlContent);  // Log the content, or save it to a service
        // You can send this content to a backend or another component
        this.dialogRef.close(this.htmlContent);  // Close the dialog and send content to the parent
      } else {
        console.log('Save operation cancelled');  // Log or perform any other action when cancelled
      }
    });
  }
  

  // Handle cancel button
  cancel() {
    console.log('Cancelled');
    this.dialogRef.close();  // Just close the dialog without saving
  }

  ngAfterViewInit(): void {
    if (this.editorContainer) {
      // Initialize Quill once the view has been initialized
      this.editor = new Quill(this.editorContainer.nativeElement, {
        theme: 'snow',
        modules: {
          table: true, // Enable table module
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link'],
            [{ 'align': [] }],
            ['table'], // Add table button to toolbar
          ],
        },
      });
      const content = `
      <p>your colleague(s) must complete mandatory Complance Training. This ensure our organization's obligation to be compliant with government and/or regulatory agencies.Adherence to completion of mandatory training will help CVS Health reduce finacial and legal risks.</p>
      <br>
      <b>The Following colleague(s) in your store must complete their Compliance Training within 21 days of assignment date.</b>
      <br>
      <p><employeeList</p>
      <b>Since your colleague(s) do not have access to email , it is important to notify them as soon as possible so they can complete their required training on time. Colleague that fail to complete certain courses by the due date will result in their access being suspended </b>

      <br>
      <accessLearningHubStoreText>
      <br>
      <p>Compliance Training Team</p>
    `;
    
      // Set default content in the editor
      this.editor.root.innerHTML =content;
    }
  }
  

}
