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
import { FormsModule ,FormControl,ReactiveFormsModule} from '@angular/forms';  // Import FormsModule here
import { EdituserdialogComponent } from '../edituserdialog/edituserdialog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Import CUSTOM_ELEMENTS_SCHEMA if needed
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';  // Import the module
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule
import Quill from 'quill';
import { Table, TableRow, TableCell, WidthType, Paragraph } from "docx";

import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

import * as docx from 'docx';  // Import docx module
import { DownloadwordpdfdialogComponent } from '../downloadwordpdfdialog/downloadwordpdfdialog.component';
import { TextRun } from 'docx'; // Ensure you're importing TextRun from docx
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';
import QuillTableBetter from "quill-table-better";
import { QuillModule } from "ngx-quill";

Quill.register(
  {
    "modules/table-better": QuillTableBetter,
  },
  true
);


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
          FormsModule ,ReactiveFormsModule,QuillModule ,CKEditorModule,MatTooltipModule  ,FormsModule,AngularEditorModule,HttpClientModule ,MatSelectModule,CommonModule 
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


// Predefined text snippets for dropdown and drag-and-drop
 quillEditorInstance: Quill | null = null;
  showCode = false;
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
 createCode(): void {
    this.htmlContent = this.quillEditorInstance?.root.outerHTML || "";
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
              new docx.TextRun(""),
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

convertHtmlElementToWordTextRun(element: HTMLElement): docx.TextRun {
  const text = element.textContent || '';
  let textRunOptions: any = { text };

  // Apply formatting based on tag
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
      textRunOptions.underline = {};
      break;
    case 'a':
      const link = element.getAttribute('href');
      if (link) {
        textRunOptions.text = text;
        textRunOptions.style = 'Hyperlink';
      }
      break;
    case 'br':
      return new docx.TextRun('\n');
  }

  // ✅ Get computed style (covers inline + CSS classes)
  const computedStyle = window.getComputedStyle(element);
  const color = computedStyle.color;
  if (color) {
    const hex = color.startsWith('rgb')
      ? this.rgbToHex(color)
      : this.namedColorToHex(color);
    textRunOptions.color = hex.replace('#', '');
  }

  return new docx.TextRun(textRunOptions);
}


rgbToHex(rgb: string): string {
  const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(rgb);
  if (!result) return '#000000'; // default fallback

  const r = parseInt(result[1], 10).toString(16).padStart(2, '0');
  const g = parseInt(result[2], 10).toString(16).padStart(2, '0');
  const b = parseInt(result[3], 10).toString(16).padStart(2, '0');

  return `#${r}${g}${b}`;
}

namedColorToHex(colorName: string): string {
  const colorMap: { [key: string]: string } = {
    black: '#000000',
    white: '#ffffff',
    red: '#ff0000',
    green: '#008000',
    blue: '#0000ff',
    yellow: '#ffff00',
    gray: '#808080',
    maroon: '#800000',
    purple: '#800080',
    teal: '#008080',
    navy: '#000080',
    silver: '#c0c0c0',
    lime: '#00ff00',
    // Add more as needed
  };

  return colorMap[colorName.toLowerCase()] || '#000000'; // fallback to black
}



convertQuillToWordContent(content: string): (docx.Paragraph | docx.Table)[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');
  const elements = Array.from(doc.body.children);

  const blocks: (docx.Paragraph | docx.Table)[] = elements.map((el: Element) => {
    if (el.tagName.toLowerCase() === 'table') {
      const rows = Array.from(el.querySelectorAll('tr')).map(tr => {
        const cells = Array.from(tr.children).map(cell =>
          new TableCell({
            width: { size: 100 / tr.children.length, type: WidthType.PERCENTAGE },
            children: [new Paragraph(cell.textContent || '')],
          })
        );
        return new TableRow({ children: cells });
      });

      return new Table({ rows });
    } else {
      return this.convertHtmlElementToWordParagraph(el as HTMLElement);
    }
  });

  return blocks; // ✅ Return the mixed array directly
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
                      [{ 'color': [] }, { 'background': [] }], // Color and background options
                      
                      ['image'],  // Code-block button included
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
}
