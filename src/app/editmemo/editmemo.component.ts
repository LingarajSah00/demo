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

import * as docx from 'docx';  // Import docx module
import { DownloadwordpdfdialogComponent } from '../downloadwordpdfdialog/downloadwordpdfdialog.component';
import { TextRun } from 'docx'; // Ensure you're importing TextRun from docx
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';

@Component({
  selector: 'app-editmemo',
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
          FormsModule  ,CKEditorModule,MatTooltipModule  ,FormsModule,AngularEditorModule,HttpClientModule ,MatSelectModule,CommonModule 
            // Import QuillModule
  ],
  templateUrl: './editmemo.component.html',
  styleUrl: './editmemo.component.css'
})
export class EditmemoComponent {
  editor: any;  // Quill editor instance
  @ViewChild('editorContainer') editorContainer!: ElementRef;
// Predefined text snippets for dropdown and drag-and-drop
selectedText: string = '';
htmlMode: boolean = false;  // Track if the editor is in HTML mode

textSnippets = [
  '< accessLearningHubStoreText >',
  '<employeeList1>',
  '< accessLearningHubStoreText >',
  '<employeeList1>',
  '<employeeList1>'
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
    public dialogRef: MatDialogRef<EditmemoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('Editor Initialized'); // Log to confirm initialization
    this.htmlContent = '<p>Editor is ready!</p>';

  }


  // Open the download dialog
    openDownloadDialog(): void {
      const dialogRef = this.dialog.open(DownloadwordpdfdialogComponent, {
        width: '300px', // Adjust the width as needed
      });
  
      // Handle the dialog close event to determine download type
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.downloadData(result); // Pass the selected format to download the data
        }
      });
    }

    downloadData(format: string): void {
  
       if (format === 'word') {
        this.exportToWord();
      }
    }


// Method to export Quill content to Word with formatting preserved
exportToWord(): void {
  const content = this.editor.root.innerHTML; // Get the Quill content as HTML

  // Create a new Word document using the docx library
  const doc = new docx.Document({
    sections: [
      {
        properties: {},
        children: [
          new docx.Paragraph({
            children: [
              new docx.TextRun("Generated content from Quill editor:"),
            ],
          }),
          ...this.convertQuillToWordContent(content), // Convert the Quill content to Word format
        ],
      },
    ],
  });

  // Convert the document to Blob and trigger the download
  docx.Packer.toBlob(doc).then((blob) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'memo.docx';
    link.click();
  });
}

convertHtmlElementToWordParagraph(element: HTMLElement): docx.Paragraph {
  const children = Array.from(element.childNodes).map((node: ChildNode) => {
    if (node.nodeType === Node.TEXT_NODE) {
      // Convert text node to Word TextRun
      return this.convertTextNodeToWordTextRun(node as Text);
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      // Convert element node to Word TextRun
      return this.convertHtmlElementToWordTextRun(node as HTMLElement);
    }
    return null; // If the node is neither text nor element, return null
  }).filter(child => child !== null); // Filter out null values (non-text/element nodes)

  // Return a Paragraph with the children (TextRuns)
  return new docx.Paragraph({
    children: children as docx.TextRun[], // Casting to TextRun[] as that is the expected type
  });
}



// Convert a TextNode to a TextRun with proper formatting
convertTextNodeToWordTextRun(node: Text): docx.TextRun {
  return new docx.TextRun({
    text: node.textContent || '',
  });
}

// Convert HTML element to a TextRun, considering formatting tags like <b>, <i>, <u>, <br>, etc.
convertHtmlElementToWordTextRun(element: HTMLElement): docx.TextRun {
  const text = element.innerText || ''; // Get the text without HTML tags
  let textRunOptions: any = { text: text }; // Default options

  // Apply styles based on the element's tag
  switch (element.tagName.toLowerCase()) {
    case 'b':
    case 'strong':
      textRunOptions.bold = true;
      break;
    case 'i':
    case 'em':
      textRunOptions.italic = true;
      break;
    case 'u':
      textRunOptions.underline = true;
      break;
    case 'br':
      // For <br> tags, create a TextRun with a line break
      return new docx.TextRun('\n'); // New line for Word document
    case 'p':
      // For <p> tags (paragraphs), they will be handled by the parent convertHtmlElementToWordParagraph method
      return new docx.TextRun(text);
    default:
      break;
  }

  // Return the TextRun with the applied formatting
  return new docx.TextRun(textRunOptions);
}


convertQuillToWordContent(content: string): docx.Paragraph[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');
  const elements = Array.from(doc.body.children); // Get all elements inside the Quill content

  return elements.map((element: Element) => this.convertHtmlElementToWordParagraph(element as HTMLElement));
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
                               ['html']  ,
                    ['undo', 'redo'], // Add undo and redo buttons
                    [{ 'line-height': '1.5' }, { 'line-height': '1.8' }, { 'line-height': '2' }], // Add line-height to toolbar


                     ],
                     history: {
                      delay: 1000,  // Configurable undo/redo delay
                      userOnly: true,  // Track only user-initiated changes
                    },
      },
      formats: [
        'font', 'size', 'bold', 'italic', 'underline', 'strike', 'list', 'align', 'link', 'image', 'color', 'background','code-block','blockquote','undo','redo','line-height'
      ]
    });

     // Optional: Adding custom undo and redo buttons with icons
     const toolbar = this.editor.container.querySelector('.ql-toolbar');
    
     // Undo button with Angular Material icon
     const undoButton = document.createElement('button');
     undoButton.classList.add('ql-undo');
     undoButton.innerHTML = `<mat-icon>undo</mat-icon>`;  // Using Angular Material 'undo' icon
     undoButton.addEventListener('click', () => this.editor.history.undo());
     toolbar?.appendChild(undoButton);
 
     // Redo button with Angular Material icon
     const redoButton = document.createElement('button');
     redoButton.classList.add('ql-redo');
     redoButton.innerHTML = `<mat-icon>redo</mat-icon>`;  // Using Angular Material 'redo' icon
     redoButton.addEventListener('click', () => this.editor.history.redo());
     toolbar?.appendChild(redoButton);

    this.addCustomFontFamilyDropdown();
    this.addCustomFontSizeDropdown();
    this.addLineHeightDropdown();

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
    
      // Set default content in the editor
      this.editor.root.innerHTML =content;
    }
  }

  addLineHeightDropdown() {
    const toolbar = this.editor.container.querySelector('.ql-toolbar');
  
    // Create a select element for line-height
    const lineHeightSelect = document.createElement('select');
    lineHeightSelect.classList.add('ql-line-height');
    lineHeightSelect.innerHTML = `
      <option value="1.5">1.5</option>
      <option value="1.8">1.8</option>
      <option value="2">2</option>
      <option value="2.5">2.5</option>
    `;
  
    // Listen to changes in the line-height dropdown
    lineHeightSelect.addEventListener('change', (event) => {
      const lineHeight = (event.target as HTMLSelectElement).value;
      this.editor.format('line-height', lineHeight); // Apply line-height to the selected text
    });
  
    // Append the select element to the toolbar
    toolbar?.appendChild(lineHeightSelect);
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

// Function to toggle between HTML and Quill editor modes
toggleHTMLMode() {
  this.htmlMode = !this.htmlMode;  // Toggle between HTML and Quill editor

  const editorElement = this.editorContainer.nativeElement;

  if (this.htmlMode) {
    // Switch to HTML mode: Convert the content of the Quill editor to HTML
    const htmlContent = this.convertToHTML(this.editor.root.innerHTML);

      // Remove previous list markers from HTML to prevent duplicate lists
      const sanitizedHtml = this.removeDuplicateLists(htmlContent);

    // Replace the Quill editor with a textarea for editing raw HTML
    this.editorContainer.nativeElement.innerHTML = `
      <textarea id="html-editor" style="width: 100%; height: 100%; background-color: black; color: white; border: none; resize: none;">${htmlContent}</textarea>
    `;

    // Update the background color for the HTML editor
    editorElement.style.backgroundColor = 'black';
    editorElement.style.color = 'white';

    // Listen for changes in the textarea and update Quill's content accordingly
    const htmlEditor = document.getElementById('html-editor') as HTMLTextAreaElement;
    htmlEditor.addEventListener('input', () => {
      // Update Quill's content whenever the HTML editor changes
      this.editor.root.innerHTML = htmlEditor.value;
    });
  } else {
    // Switch back to Quill editor mode
    const htmlEditor = document.getElementById('html-editor') as HTMLTextAreaElement;

    if (htmlEditor) {
      const newHtml = htmlEditor.value;  // Get the HTML content from the textarea
      editorElement.innerHTML = '';  // Clear the editor container


 // Remove previous Quill toolbar after short delay to ensure removal
 setTimeout(() => {
  const existingToolbar = document.querySelector('.ql-toolbar.ql-snow');
  if (existingToolbar) {
    existingToolbar.remove();  // Remove the previous toolbar
    console.log('Previous toolbar removed');
  }
}, 100);

      // Restore the Quill editor with the updated HTML content
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

      // Update the Quill content with the latest HTML content
      this.editor.clipboard.dangerouslyPasteHTML(newHtml);

      // Reset the background color and text color
      editorElement.style.backgroundColor = 'white';
      editorElement.style.color = 'black';
    }
  }
}

// Helper function to remove duplicate ordered lists
removeDuplicateLists(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  const orderedLists = doc.querySelectorAll('ol');

  // For each ordered list, make sure no duplicate list items exist
  orderedLists.forEach(ol => {
    const listItems = ol.querySelectorAll('li');
    const seenText = new Set();
    
    listItems.forEach(li => {
      if (seenText.has(li.textContent?.trim())) {
        li.remove();  // Remove duplicate list item
      } else {
        seenText.add(li.textContent?.trim());
      }
    });
  });

  return doc.body.innerHTML;
}
stripHtmlTags(input: string): string {
  const doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.body.textContent || "";
}




convertToHTML(content: string): string {
  

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;

  // Optional cleanup: remove empty spans or Quill-specific classes
  tempDiv.querySelectorAll('[class^="ql-"]').forEach(el => el.removeAttribute('class'));

  // Avoid double-wrapping or duplicating by returning the whole cleaned HTML
  return tempDiv.innerHTML.trim();
}
}
