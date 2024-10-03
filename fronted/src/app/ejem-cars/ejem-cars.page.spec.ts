import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemCarsPage } from './ejem-cars.page';

describe('EjemCarsPage', () => {
  let component: EjemCarsPage;
  let fixture: ComponentFixture<EjemCarsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemCarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
