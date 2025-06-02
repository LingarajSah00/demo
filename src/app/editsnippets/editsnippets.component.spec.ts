import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsnippetsComponent } from './editsnippets.component';

describe('EditsnippetsComponent', () => {
  let component: EditsnippetsComponent;
  let fixture: ComponentFixture<EditsnippetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditsnippetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditsnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
