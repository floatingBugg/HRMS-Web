import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedDrivesComponent } from './unassigned-drives.component';

describe('UnassignedDrivesComponent', () => {
  let component: UnassignedDrivesComponent;
  let fixture: ComponentFixture<UnassignedDrivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedDrivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedDrivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
