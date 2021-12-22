import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedPrintersComponent } from './unassigned-printers.component';

describe('UnassignedPrintersComponent', () => {
  let component: UnassignedPrintersComponent;
  let fixture: ComponentFixture<UnassignedPrintersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedPrintersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedPrintersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
