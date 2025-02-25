import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';  // Import MatTabsModule for tabs
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';  // Import the MatDatepicker module
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';  // Import the native date module
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-exclusion',
  imports: [MatTabsModule,FormsModule,MatInputModule,CommonModule,MatFormFieldModule,MatSelectModule,MatOptionModule
    , MatDatepickerModule,  // Import MatDatepicker module
    MatNativeDateModule,MatCheckboxModule],
  templateUrl: './exclusion.component.html',
  styleUrl: './exclusion.component.css'
})
export class ExclusionComponent {
  textBoxValue: string = '';

    // Define arrays for the dropdown options
    dropdown1Options = ['Option 1', 'Option 2', 'Option 3'];
    dropdown2Options = ['Option A', 'Option B', 'Option C'];
    dropdown3Options = ['Choice X', 'Choice Y', 'Choice Z'];
  
// The selected values from the dropdowns
selectedOption1: string | null = null;
selectedOption2: string | null = null;
selectedOption3: string | null = null;

// Methods for button actions
onAdd(): void {
  console.log('Add clicked');
  console.log('Selected Options:', this.selectedOption1, this.selectedOption2, this.selectedOption3);
}

onEdit(): void {
  console.log('Edit clicked');
  console.log('Selected Options:', this.selectedOption1, this.selectedOption2, this.selectedOption3);
}

onDelete(): void {
  console.log('Delete clicked');
  console.log('Selected Options:', this.selectedOption1, this.selectedOption2, this.selectedOption3);
}
}
