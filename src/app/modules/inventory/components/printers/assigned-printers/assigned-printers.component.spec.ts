import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedPrintersComponent } from './assigned-printers.component';

describe('AssignedPrintersComponent', () => {
  let component: AssignedPrintersComponent;
  let fixture: ComponentFixture<AssignedPrintersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedPrintersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedPrintersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
