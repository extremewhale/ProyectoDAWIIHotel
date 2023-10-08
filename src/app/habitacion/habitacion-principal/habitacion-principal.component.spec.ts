import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionPrincipalComponent } from './habitacion-principal.component';

describe('HabitacionPrincipalComponent', () => {
  let component: HabitacionPrincipalComponent;
  let fixture: ComponentFixture<HabitacionPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HabitacionPrincipalComponent]
    });
    fixture = TestBed.createComponent(HabitacionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
