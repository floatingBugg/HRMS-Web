import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedFurnitureComponent } from './assigned-furniture.component';

describe('AssignedFurnitureComponent', () => {
  let component: AssignedFurnitureComponent;
  let fixture: ComponentFixture<AssignedFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedFurnitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
