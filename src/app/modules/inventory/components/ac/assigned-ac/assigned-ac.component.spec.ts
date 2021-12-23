import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedAcComponent } from './assigned-ac.component';

describe('AssignedAcComponent', () => {
  let component: AssignedAcComponent;
  let fixture: ComponentFixture<AssignedAcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedAcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
