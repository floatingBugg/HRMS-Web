import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerCablesComponent } from './power-cables.component';

describe('PowerCablesComponent', () => {
  let component: PowerCablesComponent;
  let fixture: ComponentFixture<PowerCablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerCablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerCablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
