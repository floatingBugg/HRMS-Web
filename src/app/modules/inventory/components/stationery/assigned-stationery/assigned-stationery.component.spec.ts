import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedStationeryComponent } from './assigned-stationery.component';

describe('AssignedStationeryComponent', () => {
  let component: AssignedStationeryComponent;
  let fixture: ComponentFixture<AssignedStationeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedStationeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedStationeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
