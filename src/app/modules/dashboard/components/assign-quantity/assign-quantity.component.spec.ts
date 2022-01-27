import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignQuantityComponent } from './assign-quantity.component';

describe('AssignQuantityComponent', () => {
  let component: AssignQuantityComponent;
  let fixture: ComponentFixture<AssignQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
