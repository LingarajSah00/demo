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
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';


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
        FormsModule  ,CKEditorModule,MatTooltipModule  ,FormsModule,AngularEditorModule,HttpClientModule ,MatSelectModule,CommonModule ],
          // Import QuillModule


  templateUrl: './edit-template-dialog.component.html',
  styleUrl: './edit-template-dialog.component.css'
})
export class EditTemplateDialogComponent implements AfterViewInit{
  
  editor: any;  // Quill editor instance
  @ViewChild('editorContainer') editorContainer!: ElementRef;
// Predefined text snippets for dropdown and drag-and-drop
selectedText: string = '';
htmlMode: boolean = false;  // Track if the editor is in HTML mode

textSnippets = [
  { name: 'Date Needed', tag: '‹dateNeeded›', description: 'Due1 date from Saba course and certification assignment tables' },
    { name: 'Employee List', tag: '‹employeeList›', description: 'List of employees who need to complete the training' }
    
];
  htmlContent: string = '';  // Editor content
  config = {
    editable: true,
    spellcheck: true,
    height: '700px',  // Customize height
    minHeight: '700px',
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
    this.textSnippets = this.data.availableMergeFields || [];

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
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],  // Formatting options
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }], // List formatting
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    ['clean'],                                         // remove formatting button
                    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent

                    ['link'], // Add link button
                    [{ 'align': [] }], // Alignment options
                    
                    ['image', 'code-block'],  // Code-block button included
                    [{ 'size': ['small', 'medium', 'large', 'huge'] }], // Predefined sizes
                               ['html']  // We will create this button
                  ],
                    
      },
      formats: [
        'font', 'size', 'bold', 'italic', 'underline', 'strike', 'list','header','clean','indent','script', 'align', 'link', 'image', 'color', 'background','code-block','blockquote'
      ]
    });

    this.addCustomButtons();

      const content = `
      <p>your colleague(s) must complete mandatory Complance Training. This ensure our organization's obligation to be compliant with government and/or regulatory agencies.Adherence to completion of mandatory training will help CVS Health reduce finacial and legal risks.</p>
      <br>
      <p>The Following colleague(s) in your store must complete their Compliance Training within 21 days of assignment date.</p>
      <br>
      <p>&lt; employeeList &gt;<br>
      Since your colleague(s) do not have access to email , it is important to notify them as soon as possible so they can complete their required training on time. <b>Colleague that fail to complete certain courses by the due date will result in their access being suspended </b></p>

      <br>
      <p>&lt; accessLearningHubStoreText &gt;
      <br>Compliance Training Team</p>
    `;
 
    this.addHTMLButton();


      // Set default content in the editor
      
      // Set default content in the editor
      if (this.data.body) {
        this.editor.root.innerHTML = this.data.body;
      } 
      // Store available merge fields from parent data
      if (this.data.availableMergeFields && this.data.availableMergeFields.length > 0) {
        this.textSnippets = this.data.availableMergeFields;
        console.log('Available Merge Fields:', this.textSnippets);
      }

    }
  }

  addCustomButtons() {
    const toolbar = this.editor.container.querySelector('.ql-toolbar');
  
    // Create X to Power 2 button (for exponentiation)
    const powerButton = document.createElement('button');
    powerButton.innerText = 'X²';  // You can use any symbol or text
    powerButton.classList.add('ql-power');
    powerButton.style.marginLeft = '10px';  // Add spacing if necessary
    toolbar?.appendChild(powerButton);
  
    // Add event listener to handle exponentiation
    powerButton.addEventListener('click', () => this.insertPower());
  
    // Create Help button (?)
    const helpButton = document.createElement('button');
    helpButton.innerText = '?';  // You can change this to any symbol
    helpButton.classList.add('ql-help');
    helpButton.style.marginLeft = '10px';  // Add spacing if necessary
    toolbar?.appendChild(helpButton);
  
    // Add event listener for the Help button
    helpButton.addEventListener('click', () => this.openHelp());
  }
  // Insert exponentiation (X²) at the current selection
insertPower() {
  const range = this.editor.getSelection();
  if (range) {
    // You can insert the text as X² or format it as superscript
    this.editor.insertText(range.index, 'X');
    this.editor.formatText(range.index, 1, 'superscript', true);  // Apply superscript formatting
    this.editor.insertText(range.index + 1, '²');  // Insert the 2 character
  }
}

// Open help (you can define a dialog or any custom action here)
openHelp() {
  alert('Help section is under construction.');  // This could be a modal/dialog
}
  
  // Add the custom font family dropdown to the toolbar
  addCustomFontFamilyDropdown() {
    const toolbar = this.editor.container.querySelector('.ql-toolbar');
    const fontFamilyDropdown = document.createElement('select');
    fontFamilyDropdown.classList.add('ql-font');
    fontFamilyDropdown.innerHTML = `
      <option value="arial">Arial</option>
      <option value="times">Times New Roman</option>
      <option value="courier">Courier New</option>
      <option value="verdana">Verdana</option>
    `;

    // Add event listener to change font family
    fontFamilyDropdown.addEventListener('change', (event) => {
      const font = (event.target as HTMLSelectElement).value;
      this.editor.format('font', font); // Apply font family to selected text
    });

    toolbar?.appendChild(fontFamilyDropdown);  // Append to toolbar
  }

   // Add the custom HTML button to the toolbar
   addHTMLButton() {
    const toolbar = this.editor.container.querySelector('.ql-toolbar');
    if (toolbar) {
      // Create the HTML button
      const htmlButton = document.createElement('button');
      htmlButton.innerText = 'HTML';
      htmlButton.classList.add('ql-html');
      htmlButton.style.marginLeft = '10px'; // Add some spacing if needed

      // Append the button to the toolbar
      toolbar.appendChild(htmlButton);

      // Bind click event for HTML toggle button
      htmlButton.addEventListener('click', () => this.toggleHTMLMode());
    }
  }

  // Add the custom font size dropdown to the toolbar
  addCustomFontSizeDropdown() {
    const toolbar = this.editor.container.querySelector('.ql-toolbar');
    const fontSizeDropdown = document.createElement('select');
    fontSizeDropdown.classList.add('ql-size');
    fontSizeDropdown.innerHTML = `
      <option value="12px">12px</option>
      <option value="14px">14px</option>
      <option value="16px">16px</option>
      <option value="18px">18px</option>
    `;

    // Add event listener to change font size
    fontSizeDropdown.addEventListener('change', (event) => {
      const size = (event.target as HTMLSelectElement).value;
      this.editor.format('size', size); // Apply font size to selected text
    });

    toolbar?.appendChild(fontSizeDropdown);  // Append to toolbar
  }
 

// Handle the dragstart event for the selected snippet
onDragStart(event: any, text: string): void {
  event.dataTransfer.setData('text', text);  // Store the dragged text
  console.log('Drag started with text:', text);
}

// Handle the drop event to insert text into the Quill editor
onDrop(event: any): void {
  event.preventDefault();
  const text = event.dataTransfer.getData('text');  // Get the dragged text
  if (text) {
    const range = this.editor.getSelection();  // Get the current cursor position in the editor
    if (range) {
      this.editor.insertText(range.index, text);  // Insert the dragged text at the cursor position
    }
  }
}

// Handle the dragover event to allow the drop
onDragOver(event: any): void {
  event.preventDefault();  // Allow the drop event to happen
}


onSnippetSelect(event: any): void {
  console.log('Snippet Selected:', event.value);
  this.selectedText = event.value; // Store selected snippet
  this.insertTextIntoEditor(this.selectedText); // Insert it into the Quill editor
}

insertTextIntoEditor(text: string): void {
  let range = this.editor.getSelection();

  // If there is no selection (i.e., the cursor is not set), we set it to the end of the document
  if (!range) {
    const length = this.editor.getLength(); // Get the current length of the document
    range = { index: length - 1, length: 0 }; // Set the cursor at the end of the document
  }

  // Insert the text at the current selection or the end of the document
  this.editor.insertText(range.index, text);
}
turnEntireContentIntoCodeBlock() {
  // Get the entire content of the editor
  const content = this.editor.root.innerHTML;
  
  // Wrap the entire content in a <pre><code></code></pre> block
  const wrappedContent = `<pre><code>${content}</code></pre>`;
  
  // Set the updated content back into the Quill editor
  this.editor.root.innerHTML = wrappedContent;

  // Optional: Format the content as code block
  this.editor.formatText(0, this.editor.getLength(), 'code-block', true);
}

toggleHTMLMode() {
  this.htmlMode = !this.htmlMode; // Toggle the mode between HTML and Quill editor
  const editorElement = this.editorContainer.nativeElement;

  if (this.htmlMode) {
    // Switch to HTML mode: Convert the content to HTML
    const htmlContent = this.convertToHTML(this.editor.root.innerHTML); // Convert Quill content to HTML

    // Replace the Quill editor container with a textarea to edit raw HTML
    this.editorContainer.nativeElement.innerHTML = `
      <textarea id="html-editor" style="width: 100%; height: 100%; background-color: black; color: white; border: none; resize: none;">${htmlContent}</textarea>
    `;
    
    // Change the background color and text color for the HTML mode
    editorElement.style.backgroundColor = 'black';
    editorElement.style.color = 'white';

    // Listen for input changes in the textarea
    const htmlEditor = document.getElementById('html-editor') as HTMLTextAreaElement;
    htmlEditor.addEventListener('input', () => {
      // When the HTML content in the textarea changes, update the Quill editor's content
      this.editor.root.innerHTML = htmlEditor.value;
    });

  } else {
    // Switch back to Quill editor mode
    const htmlEditor = document.getElementById('html-editor') as HTMLTextAreaElement;

    if (htmlEditor) {
      editorElement.innerHTML = '';  // Clear the content in the editor container
      const newHtml = htmlEditor.value;  // Get the HTML content from the textarea
      editorElement.innerHTML =newHtml;
      // Set the HTML content back into Quill
      this.editor.root.innerHTML = this.data.body;
      htmlEditor.value=this.data.body;
      editorElement.innerHTML = htmlEditor.value;  // Clear the content in the editor container

      editorElement.style.backgroundColor = 'white';
      editorElement.style.color = 'black';

    }
    

    // Re-initialize the Quill editor if it’s not already initialized
    if (!this.editor) {
      // Initialize Quill editor with the required configuration
      this.editor = new Quill(this.editorContainer.nativeElement, {
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
            [{ 'align': [] }],
            ['image', 'code-block'],
            [{ 'size': ['12px', '14px', '16px', '18px', '20px'] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            ['blockquote'],
          ],
        },
        formats: [
          'font', 'size', 'bold', 'italic', 'underline', 'strike', 'list', 'align', 'link', 'image', 'color', 'background', 'code-block', 'blockquote'
        ]
      });
    }

    // Reset the background and text color to default when switching back to Quill mode
    editorElement.style.backgroundColor = 'white';
    editorElement.style.color = 'black';
  }
}






// Helper function to strip HTML tags and get plain text
stripHtmlTags(input: string): string {
  const doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.body.textContent || "";
}




convertToHTML(content: string): string {
  // Wrap each block of content (in this case, assuming paragraphs) in <p> tags
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;
  const paragraphs = tempDiv.querySelectorAll('p');

  // For each paragraph, wrap its text in <p> tags if it's not already
  let htmlString = '';
  paragraphs.forEach((p) => {
    htmlString += `<p>${p.innerHTML}</p>`;
  });

  // If there's other block-level content, such as divs, lists, etc., handle it
  const divs = tempDiv.querySelectorAll('div, ul, ol, li');
  divs.forEach((div) => {
    htmlString += div.outerHTML;  // Convert other elements to HTML
  });

  return htmlString;
}

openEmailDialog(): void {
  const dialogRef = this.dialog.open(EmailDialogComponent, {
    width: '400px',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Email dialog was closed');
    if (result) {
      this.sendEmail(result.email);  // Pass email address to sendEmail method
    }
    });
}
// Method to send an email
// Method to send an email
sendEmail(email: string): void {
  if (email) {
    console.log('Sending email to:', email);

    // Get the content from the Quill editor
    const content = document.getElementById('editor')?.innerHTML;

    if (content) {
      // URL encode the content to be used in a mailto link
      const encodedContent = encodeURIComponent(content);

      // Create the mailto link with subject and body
      const mailtoLink = `mailto:${email}?subject=Quill%20Editor%20Content&body=${encodedContent}`;

      // Open the email client
      window.location.href = mailtoLink;
    }
  } else {
    console.error('Email is required!');
  }
}
}
