import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPasajeroComponent } from './form-pasajero.component';

describe('FormPasajeroComponent', () => {
  let component: FormPasajeroComponent;
  let fixture: ComponentFixture<FormPasajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPasajeroComponent]
    });
    fixture = TestBed.createComponent(FormPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
