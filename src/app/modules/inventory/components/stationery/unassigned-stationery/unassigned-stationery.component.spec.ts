import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedStationeryComponent } from './unassigned-stationery.component';

describe('UnassignedStationeryComponent', () => {
  let component: UnassignedStationeryComponent;
  let fixture: ComponentFixture<UnassignedStationeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedStationeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedStationeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
