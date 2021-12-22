import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedKeyboardComponent } from './assigned-keyboard.component';

describe('AssignedKeyboardComponent', () => {
  let component: AssignedKeyboardComponent;
  let fixture: ComponentFixture<AssignedKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedKeyboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
