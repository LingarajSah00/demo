import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecomplienceComponent } from './employeecomplience.component';

describe('EmployeecomplienceComponent', () => {
  let component: EmployeecomplienceComponent;
  let fixture: ComponentFixture<EmployeecomplienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeecomplienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeecomplienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
