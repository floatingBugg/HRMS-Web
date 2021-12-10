import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeFailureDialogComponent } from './add-employee-failure-dialog.component';

describe('AddEmployeeFailureDialogComponent', () => {
  let component: AddEmployeeFailureDialogComponent;
  let fixture: ComponentFixture<AddEmployeeFailureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeFailureDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeFailureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
