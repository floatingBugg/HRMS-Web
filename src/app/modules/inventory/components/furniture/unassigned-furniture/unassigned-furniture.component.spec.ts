import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedFurnitureComponent } from './unassigned-furniture.component';

describe('UnassignedFurnitureComponent', () => {
  let component: UnassignedFurnitureComponent;
  let fixture: ComponentFixture<UnassignedFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedFurnitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
