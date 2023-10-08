import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPasajeroComponent } from './tabla-pasajero.component';

describe('TablaPasajeroComponent', () => {
  let component: TablaPasajeroComponent;
  let fixture: ComponentFixture<TablaPasajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaPasajeroComponent]
    });
    fixture = TestBed.createComponent(TablaPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
