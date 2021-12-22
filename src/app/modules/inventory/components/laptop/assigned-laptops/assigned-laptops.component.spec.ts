import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedLaptopsComponent } from './assigned-laptops.component';

describe('AssignedLaptopsComponent', () => {
  let component: AssignedLaptopsComponent;
  let fixture: ComponentFixture<AssignedLaptopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedLaptopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
