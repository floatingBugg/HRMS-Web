import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutValidationComponent } from './logout-validation.component';

describe('LogoutValidationComponent', () => {
  let component: LogoutValidationComponent;
  let fixture: ComponentFixture<LogoutValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
