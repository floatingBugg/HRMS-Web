import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedMouseComponent } from './assigned-mouse.component';

describe('AssignedMouseComponent', () => {
  let component: AssignedMouseComponent;
  let fixture: ComponentFixture<AssignedMouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedMouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
