import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedPowerCablesComponent } from './assigned-power-cables.component';

describe('AssignedPowerCablesComponent', () => {
  let component: AssignedPowerCablesComponent;
  let fixture: ComponentFixture<AssignedPowerCablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedPowerCablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedPowerCablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
