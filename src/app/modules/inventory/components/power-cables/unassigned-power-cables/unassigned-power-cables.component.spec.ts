import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedPowerCablesComponent } from './unassigned-power-cables.component';

describe('UnassignedPowerCablesComponent', () => {
  let component: UnassignedPowerCablesComponent;
  let fixture: ComponentFixture<UnassignedPowerCablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedPowerCablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedPowerCablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
