import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetReserveComponent } from './asset-reserve.component';

describe('AssetReserveComponent', () => {
  let component: AssetReserveComponent;
  let fixture: ComponentFixture<AssetReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetReserveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
