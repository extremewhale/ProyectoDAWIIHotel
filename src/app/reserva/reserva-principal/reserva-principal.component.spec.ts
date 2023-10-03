import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaPrincipalComponent } from './reserva-principal.component';

describe('ReservaPrincipalComponent', () => {
  let component: ReservaPrincipalComponent;
  let fixture: ComponentFixture<ReservaPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservaPrincipalComponent]
    });
    fixture = TestBed.createComponent(ReservaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
