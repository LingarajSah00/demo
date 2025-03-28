import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTemplateDialogComponent } from './edit-template-dialog.component';

describe('EditTemplateDialogComponent', () => {
  let component: EditTemplateDialogComponent;
  let fixture: ComponentFixture<EditTemplateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTemplateDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTemplateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
