import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedAcComponent } from './unassigned-ac.component';

describe('UnassignedAcComponent', () => {
  let component: UnassignedAcComponent;
  let fixture: ComponentFixture<UnassignedAcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedAcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
