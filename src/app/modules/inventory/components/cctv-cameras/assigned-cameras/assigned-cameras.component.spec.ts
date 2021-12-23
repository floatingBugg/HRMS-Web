import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedCamerasComponent } from './assigned-cameras.component';

describe('AssignedCamerasComponent', () => {
  let component: AssignedCamerasComponent;
  let fixture: ComponentFixture<AssignedCamerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedCamerasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedCamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
