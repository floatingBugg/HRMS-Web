import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedFansComponent } from './assigned-fans.component';

describe('AssignedFansComponent', () => {
  let component: AssignedFansComponent;
  let fixture: ComponentFixture<AssignedFansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedFansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedFansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
