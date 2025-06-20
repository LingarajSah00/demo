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
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms"; // Import FormsModule here

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AngularEditorModule } from '@kolkov/angular-editor';  // Import the module
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule
import Quill from 'quill';
import QuillTableBetter from "quill-table-better";
import { QuillModule } from "ngx-quill";

Quill.register(
  {
    "modules/table-better": QuillTableBetter,
  },
  true
);

import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';

const Parchment = Quill.import('parchment');

const Clipboard = Quill.import('modules/clipboard');
const Delta = Quill.import('delta');

const BlockEmbed = Quill.import('blots/block/embed');

class HrBlot extends (BlockEmbed as any) {
  static blotName = 'hr';
  static tagName = 'hr';
  static className = 'custom-hr';
  static scope = Quill.import('parchment').Scope.BLOCK;

  static create(value: any) {
    return super.create();
  }
}


HrBlot.blotName = 'hr';
HrBlot.tagName = 'hr';
HrBlot.className = 'custom-hr';

Quill.register('formats/hr', HrBlot);

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
          QuillModule,
        FormsModule ,ReactiveFormsModule ,CKEditorModule,MatTooltipModule  ,FormsModule,AngularEditorModule,HttpClientModule ,MatSelectModule,CommonModule,QuillModule ],


  templateUrl: './edit-template-dialog.component.html',
  styleUrl: './edit-template-dialog.component.css'
})
export class EditTemplateDialogComponent implements AfterViewInit{
  
  editor: any;  // Quill editor instance
  @ViewChild('editorContainer') editorContainer!: ElementRef;
// Predefined text snippets for dropdown and drag-and-drop
selectedText: string = '';
htmlMode: boolean = false;  // Track if the editor is in HTML mode
 quillEditorInstance: Quill | null = null;
  showCode = false;
  htmlContent = "";
  contentCtrl = new FormControl("");
  modules = {
    toolbar: {
      container: [
        [{ header: 1 }, { header: 2 }],
        ["bold", "italic", "underline", "strike"],
        ["link", "image"],
        [{ list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ direction: "rtl" }],
        [{ size: ["small", false, "large", "huge"] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ["table-better"],
      ],
    },
    table: false,
    "table-better": {
      language: "en_US",
      menus: [
        "column",
        "row",
        "merge",
        "table",
        "cell",
        "wrap",
        "copy",
        "delete",
      ],
      toolbarTable: true,
    },
    keyboard: {
      bindings: QuillTableBetter.keyboardBindings,
    },
  };
textSnippets = [
  { name: 'Date Needed', tag: '‹dateNeeded›', description: 'Due1 date from Saba course and certification assignment tables' },
    { name: 'Employee List', tag: '‹employeeList›', description: 'List of employees who need to complete the training' }
    
];


  
  // You can log the content or save it as needed
  saveContent() {
    
    console.log('Saved Content:', this.htmlContent);
  }

 
  constructor(
    public dialogRef: MatDialogRef<EditTemplateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('Editor Initialized'); // Log to confirm initialization
    this.htmlContent = this.data.body;
    this.textSnippets = this.data.availableMergeFields || [];

  }
  

  onContentChanged(event: any) {
    this.htmlContent = event.html;
  }

  EditorCreated = (quill: Quill) => {
    this.quillEditorInstance = quill;
    this.editor = quill; // <--- Make sure this line exists
 setTimeout(() => {
    if (this.htmlContent) {
      const sanitizedText = this.sanitizeHTML(this.htmlContent);
      this.editor.setContents([{ insert: '\n' }], 'silent');
      this.editor.clipboard.dangerouslyPasteHTML(0, sanitizedText, 'silent');
    }
  }, 100); // or 200ms if needed
  };

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




onDragStart(event: any, text: string): void {
    event.dataTransfer.setData("text", text);
  }

onDrop(event: any): void {
  event.preventDefault();
  const quill = this.editor || this.quillEditorInstance;
  if (!quill) {
    console.warn("Quill editor not ready yet.");
    return;
  }

  const text = event.dataTransfer.getData("text");
  const range = quill.getSelection();
  if (range && text) {
    quill.insertText(range.index, text);
  }
}


  onDragOver(event: any): void {
    event.preventDefault();
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



  toggleHTMLMode1(): void {
    this.htmlMode = !this.htmlMode;
    if (!this.htmlMode) {
      console.log("ORIGINAL", this.htmlContent);
      // this.contentCtrl.setValue("");

      const santizedText = this.sanitizeHTML(this.htmlContent);
      console.log("SANITIZED", santizedText);
      setTimeout(() => {
        if (this.quillEditorInstance && this.htmlContent) {
          this.quillEditorInstance.setContents([{ insert: "\n" }], "silent"); // clear
          this.quillEditorInstance.clipboard.dangerouslyPasteHTML(
            0,
            santizedText,
            "silent"
          );
        }
      }, 100);
    }
  }

  createCode(): void {
    this.htmlContent = this.quillEditorInstance?.root.outerHTML || "";
  }

sanitizeHTML(html: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

 doc.querySelectorAll('table').forEach(table => {
  const parent = table.parentElement;

  // Check if align=center or parent is a centered div
  if (table.getAttribute('align') === 'center' || 
      (parent && parent.tagName === 'DIV' && parent.getAttribute('align') === 'center')) {

    table.style.marginLeft = 'auto';
    table.style.marginRight = 'auto';

    // Optional: remove deprecated align attributes
    table.removeAttribute('align');
    if (parent && parent.getAttribute('align') === 'center') parent.removeAttribute('align');
  }
});

    // ❌ Remove quill-table-better's temporary helper elements
    doc
      .querySelectorAll('temporary, [class*="ql-table-temporary"]')
      .forEach((el) => el.remove());

    return doc.body.innerHTML;
  }
updateTable(html: string) {
  console.log("udpated table", this.htmlContent);

  if (this.editor) {
    const sanitizedHtml = html.replace(/<\/?temporary[^>]*>/g, "");

    console.log(sanitizedHtml);

    // Convert the cleaned HTML to Quill Delta
    const delta = this.editor.clipboard.convert({
      html: sanitizedHtml,
    });

    console.log(delta);
    console.log(this.editor);

    // this.quillEditorInstance.setContents(delta, "silent");
    // this.editor.setText("", "silent");
    // this.editor.clipboard.dangerouslyPasteHTML(0,sanitizedHtml,"silent");
    this.editor.setText('');
    this.editor.clipboard.dangerouslyPasteHTML(sanitizedHtml);

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
