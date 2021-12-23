import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedFansComponent } from './unassigned-fans.component';

describe('UnassignedFansComponent', () => {
  let component: UnassignedFansComponent;
  let fixture: ComponentFixture<UnassignedFansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedFansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedFansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
