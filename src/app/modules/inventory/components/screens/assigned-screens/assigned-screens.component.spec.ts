import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedScreensComponent } from './assigned-screens.component';

describe('AssignedScreensComponent', () => {
  let component: AssignedScreensComponent;
  let fixture: ComponentFixture<AssignedScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
