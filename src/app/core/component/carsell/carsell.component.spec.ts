import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsellComponent } from './carsell.component';

describe('CarsellComponent', () => {
  let component: CarsellComponent;
  let fixture: ComponentFixture<CarsellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
