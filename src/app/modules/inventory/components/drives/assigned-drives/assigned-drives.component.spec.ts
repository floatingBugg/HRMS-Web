import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedDrivesComponent } from './assigned-drives.component';

describe('AssignedDrivesComponent', () => {
  let component: AssignedDrivesComponent;
  let fixture: ComponentFixture<AssignedDrivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedDrivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedDrivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
