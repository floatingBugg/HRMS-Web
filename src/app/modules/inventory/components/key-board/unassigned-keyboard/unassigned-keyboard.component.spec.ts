import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedKeyboardComponent } from './unassigned-keyboard.component';

describe('UnassignedKeyboardComponent', () => {
  let component: UnassignedKeyboardComponent;
  let fixture: ComponentFixture<UnassignedKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedKeyboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
