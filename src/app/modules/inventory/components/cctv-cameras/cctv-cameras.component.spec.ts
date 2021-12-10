import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvCamerasComponent } from './cctv-cameras.component';

describe('CctvCamerasComponent', () => {
  let component: CctvCamerasComponent;
  let fixture: ComponentFixture<CctvCamerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CctvCamerasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CctvCamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
