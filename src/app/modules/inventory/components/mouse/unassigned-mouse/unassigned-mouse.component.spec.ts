import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedMouseComponent } from './unassigned-mouse.component';

describe('UnassignedMouseComponent', () => {
  let component: UnassignedMouseComponent;
  let fixture: ComponentFixture<UnassignedMouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedMouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
