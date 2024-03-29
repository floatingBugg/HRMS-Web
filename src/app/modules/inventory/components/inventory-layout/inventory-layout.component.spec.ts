import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryLayoutComponent } from './inventory-layout.component';

describe('InventoryLayoutComponent', () => {
  let component: InventoryLayoutComponent;
  let fixture: ComponentFixture<InventoryLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
