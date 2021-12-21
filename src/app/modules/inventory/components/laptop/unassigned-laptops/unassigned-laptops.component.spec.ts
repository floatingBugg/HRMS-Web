import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedLaptopsComponent } from './unassigned-laptops.component';

describe('UnassignedLaptopsComponent', () => {
  let component: UnassignedLaptopsComponent;
  let fixture: ComponentFixture<UnassignedLaptopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedLaptopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
