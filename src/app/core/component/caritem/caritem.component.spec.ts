import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaritemComponent } from './caritem.component';

describe('CaritemComponent', () => {
  let component: CaritemComponent;
  let fixture: ComponentFixture<CaritemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaritemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
