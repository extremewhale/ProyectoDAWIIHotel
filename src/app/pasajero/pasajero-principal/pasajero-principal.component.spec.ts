import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasajeroPrincipalComponent } from './pasajero-principal.component';

describe('PasajeroPrincipalComponent', () => {
  let component: PasajeroPrincipalComponent;
  let fixture: ComponentFixture<PasajeroPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasajeroPrincipalComponent]
    });
    fixture = TestBed.createComponent(PasajeroPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
