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
import {  FormControl, FormsModule, ReactiveFormsModule  } from '@angular/forms';  // Import FormsModule here
import { EdituserdialogComponent } from '../edituserdialog/edituserdialog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Import CUSTOM_ELEMENTS_SCHEMA if needed
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';
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
import * as docx from 'docx';  // Import docx module
import { DownloadwordpdfdialogComponent } from '../downloadwordpdfdialog/downloadwordpdfdialog.component';

@Component({
  selector: 'app-clonememo',
  imports: [MatTableModule  ,   // Import MatTableModule for Angular Material Table
    MatButtonModule,  // Optional: To add buttons or actions
    MatIconModule,     // Optional: For adding icons (e.g., edit, delete)
    MatPaginatorModule, // For pagination
    MatInputModule,
    MatDialogModule,
    QuillModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule  ,CKEditorModule,MatTooltipModule  ,FormsModule,AngularEditorModule,HttpClientModule ,MatSelectModule,CommonModule ],
  templateUrl: './clonememo.component.html',
  styleUrl: './clonememo.component.css'
})
export class ClonememoComponent {
  editor: any;  // Quill editor instance
  @ViewChild('editorContainer') editorContainer!: ElementRef;
// Predefined text snippets for dropdown and drag-and-drop
selectedText: string = '';
editableText: string = 'Memo -To Store Compliance New Hire Welcome';  // The text that will be shown

isEditing: boolean = false;  // Flag to check if the text is in edit mode


// Predefined text snippets for dropdown and drag-and-drop
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
  // Enable edit mode when the edit icon is clicked
  enableEdit(): void {
    this.isEditing = true;
  }

  // Save the changes and exit edit mode
  saveEdit(): void {
    this.isEditing = false;
    console.log('Saved text:', this.editableText);  // Optionally, log or save the edited text
  }

  // Cancel the edit mode and revert the text
  cancelEdit(): void {
    this.isEditing = false;
    console.log('Edit cancelled');
  }
textSnippets = [
  '< accessLearningHubStoreText >',
  '<employeeList1>',
  '< accessLearningHubStoreText >',
  '<employeeList1>',
  '<employeeList1>'
];
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
    public dialogRef: MatDialogRef<ClonememoComponent>,
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
  exportToWord(): void {
    const content = this.editor.root.innerHTML; // Quill content as HTML
  
    // Create a new Word document using docx library
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
            new docx.Paragraph({
              children: [
                new docx.TextRun(content), // Insert Quill content into Word document
              ],
            }),
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
                    ['link'], // Add link button
                    [{ 'align': [] }], // Alignment options
                    ['image', 'code-block'], // Image and code block buttons
                    [{ 'size': ['12px', '14px', '16px', '18px', '20px'] }],  // Text sizes
                    [{ 'color': [] }, { 'background': [] }], // Text and background colors
                    [{ 'font': [] }],
                    ['blockquote']        ],
      },
      formats: [
        'font', 'size', 'bold', 'italic', 'underline', 'strike', 'list', 'align', 'link', 'image', 'color', 'background','code-block','blockquote'
      ]
    });

   
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
      setTimeout(() => this.addTooltips(), 200);

    }
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
}
