import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedScreensComponent } from './unassigned-screens.component';

describe('UnassignedScreensComponent', () => {
  let component: UnassignedScreensComponent;
  let fixture: ComponentFixture<UnassignedScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
