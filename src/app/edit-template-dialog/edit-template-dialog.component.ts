import { Component, AfterViewInit,Inject,ViewChild, ElementRef ,importProvidersFrom } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';  // Import slide toggle module
import { FormsModule } from '@angular/forms';  // Import FormsModule here

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AngularEditorModule } from '@kolkov/angular-editor';  // Import the module
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule
import Quill from 'quill';
import 'quill-table-up/index.css';
import 'quill-table-up/table-creator.css';
import TableUp, {
  defaultCustomSelect,
  TableMenuSelect,
  TableResizeLine,
  TableResizeScale,
  TableSelection,
  TableVirtualScrollbar,
} from 'quill-table-up';

import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import 'quill-table-up/index.css';

Quill.register({ 'modules/tableUp': TableUp }, true);
const Parchment = Quill.import('parchment');

// Ensure BlockEmbed is declared before usage
const BlockEmbed = Quill.import('blots/block/embed') as typeof Parchment.EmbedBlot;

class TableUpColBlot extends BlockEmbed {
  static override blotName = 'table-up-col';
  static override  tagName = 'td';

  static override  create(value: any): HTMLElement {
    const node = super.create(value) as HTMLElement; // cast Node to HTMLElement
    node.setAttribute('data-row', value);
    return node;
  }
}



TableUpColBlot.blotName = 'table-up-col';
TableUpColBlot.tagName = 'td';

Quill.register(TableUpColBlot);

const Clipboard = Quill.import('modules/clipboard');
const Delta = Quill.import('delta');

// class CustomClipboard extends Clipboard {
//   onPaste(event) {
//     const clipboardData = event.clipboardData || window.clipboardData;
//     const html = clipboardData.getData('text/html');
//     if (html) {
//       event.preventDefault();
//       const delta = this.convertHtmlToDelta(html);
//       this.quill.updateContents(delta, 'user');
//     } else {
//       super.onPaste(event);
//     }
//   }

//   convertHtmlToDelta(html) {
//     // Implement conversion logic here
//     // Ensure that <td> elements are converted to your custom TableUpColBlot
//     return new Delta().insert(html);
//   }
// }

// Quill.register('modules/clipboard', CustomClipboard, true);

// Register the table module

// class HrBlot extends BlockEmbed {
//   static blotName = 'hr';
//   static tagName = 'hr';

//   static create() {
//     const node = super.create();
//     node.setAttribute('class', 'custom-hr');
//     return node;
//   }
// }

// Quill.register(HrBlot);
// interface TemplateData {
//   id: number;
//   name: string;
//   email: string;
//   status: string;
// }
@Component({
  selector: 'app-edit-template-dialog',
  imports: [MatNativeDateModule,MatTableModule  ,   // Import MatTableModule for Angular Material Table
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
        tableUI: true,
        
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],  // Formatting options
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }], // List formatting
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    ['clean'],                                         // remove formatting button
                    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                    ['table'],
                    ['link'], // Add link button
                    [{ 'align': [] }], // Alignment options
                    ['image'],  // Code-block button included
                    [{ 'size': ['small', 'medium', 'large', 'huge'] }], // Predefined sizes
                               ['html'] , // We will create this button
                               [{ 'color': [] }, { 'background': [] }]

                  ],
     
                  tableUp: {
                    scrollbar: TableVirtualScrollbar,
      resize: TableResizeLine,
      resizeScale: TableResizeScale,
      customSelect: defaultCustomSelect,
      selection: TableSelection,
      selectionOptions: {
        tableMenu: TableMenuSelect,
      },
                  },

      },
      formats: [
        'font', 'size', 'bold', 'italic', 'underline', 'strike', 'list','header','clean','indent','script', 'align', 'link', 'image', 'color', 'background','blockquote','table'
      ]
    });
    

   

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

   
      setTimeout(() => this.addTooltips(), 200);
    

  }
 
  
  addTooltips() {
    //const toolbar = this.editor.container.querySelector('.ql-toolbar');
    const toolbar = document.querySelector('.ql-toolbar.ql-snow');

    if (!toolbar) {
      console.warn('Toolbar not found');
      return;
    }
  
    const buttonMap: { [selector: string]: string } = {
      '.ql-bold': 'Bold',
      '.ql-italic': 'Italic',
      '.ql-underline': 'Underline',
      '.ql-strike': 'Strikethrough',
      '.ql-list[value="ordered"]': 'Ordered List',
      '.ql-list[value="bullet"]': 'Bullet List',
      '.ql-link': 'Insert Link',
      '.ql-image': 'Insert Image',
      '.ql-script[value="sub"]': 'SubScript',
      '.ql-script[value="super"]': 'SuperScript',

      '.ql-indent[value="+1"]':'Indent Right',
      '.ql-indent[value="-1"]':'Indent Left',
      '.ql-picker-label':'Header Size',
      '.ql-clean': 'Clear Formatting',
      '.ql-color': 'Text Color',
      '.ql-background': 'Background Color',
      '.ql-size': 'Font Size',
      '.ql-align': 'Text Alignment',
      '.ql-hr': 'Insert Horizontal Line',
      '.ql-power': 'Insert X²',
      '.ql-help': 'Help',
      '.ql-html': 'Toggle HTML Mode'
    };
  
    Object.entries(buttonMap).forEach(([selector, title]) => {
      const btn = toolbar.querySelector(selector);
      if (btn) {
        btn.setAttribute('title', title);
        //console.log(`Added tooltip: ${title} -> ${selector}`);
      } else {
       // console.warn(`Button not found: ${selector}`);
      }
    });
  }
  
  insertHorizontalRule() {
    const selection = this.editor.getSelection();
    if (selection) {
      this.editor.insertEmbed(selection.index, 'hr', true);
      console.log('Inserted <hr> at index:', selection.index);
      console.log('Editor HTML:', this.editor.root.innerHTML);
      this.editor.root.innerHTML += '<hr>';

    } else {
      console.warn('No selection in editor.');
    }
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
  
  
 
addTableButton() {
  const toolbar = this.editor.container.querySelector('.ql-toolbar');

  const button = document.createElement('button');
  button.innerHTML = '🧮';  // or text like "Table"
  button.classList.add('ql-insertTable');
  toolbar?.appendChild(button);

  button.addEventListener('click', () => {
    const table = this.editor.getModule('better-table');
    if (table) {
      table.insertTable(3, 3);
    } else {
      console.warn('Better table module not found.');
    }
  });
}
insertTable(): void {
  const selection = this.editor.getSelection();
  this.insertHTMLTable();
}
insertHTMLTable(rows = 3, cols = 3): void {
  if (!this.editor) return;

  const range = this.editor.getSelection(true);
  const headerCells = Array.from({ length: cols }, (_, i) => `Header ${i + 1}`);
  const separator = Array.from({ length: cols }, () => '----------');
  const emptyRow = Array.from({ length: cols }, () => '‹value›');

  let tableText = '';

  // Header row
  tableText += '| ' + headerCells.join(' | ') + ' |\n';
  // Separator
  tableText += '| ' + separator.join(' | ') + ' |\n';
  // Body rows
  for (let r = 0; r < rows; r++) {
    tableText += '| ' + emptyRow.join(' | ') + ' |\n';
  }

  // Insert as code block for consistent formatting
  this.editor.insertText(range.index, tableText, { 'code-block': true });

  // Move cursor after the inserted table
  this.editor.setSelection(range.index + tableText.length); 

  
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
                      ['table'],
                      ['link'], // Add link button
                      [{ 'align': [] }], // Alignment options
                      
                      ['image'],  // Code-block button included
                      [{ 'color': [] }, { 'background': [] }],
                      [{ 'size': ['small', 'medium', 'large', 'huge'] }], // Predefined sizes
                                 ['html']  // We will create this button
                    ],
                    tableUp: {scrollbar: TableVirtualScrollbar,
                      resize: TableResizeLine,
                      resizeScale: TableResizeScale,
                      customSelect: defaultCustomSelect,
                      selection: TableSelection,
                      selectionOptions: {
                        tableMenu: TableMenuSelect,
                      },},
        },
        formats: [
          'font', 'size', 'bold', 'italic', 'underline', 'strike', 'list','header','clean','indent','script', 'align', 'link', 'image', 'table','color', 'background','code-block','blockquote'
        ]
      });
      //let htmlContent = '<table><tr><td>Cell 1</td></tr></table>';
      // Process the HTML content as needed
      // For example, you can add custom attributes or classes
      const htmlContent = htmlEditor.value;
      this.editor.clipboard.dangerouslyPasteHTML(0, htmlContent);

      
      // Reset the background color and text color
      editorElement.style.backgroundColor = 'white';
      editorElement.style.color = 'black';
      setTimeout(() => this.addTooltips(), 200);

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
