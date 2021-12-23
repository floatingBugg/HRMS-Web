import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedCamerasComponent } from './unassigned-cameras.component';

describe('UnassignedCamerasComponent', () => {
  let component: UnassignedCamerasComponent;
  let fixture: ComponentFixture<UnassignedCamerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedCamerasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedCamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
