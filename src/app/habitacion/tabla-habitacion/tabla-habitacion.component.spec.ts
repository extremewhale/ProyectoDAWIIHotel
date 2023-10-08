import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaHabitacionComponent } from './tabla-habitacion.component';

describe('TablaHabitacionComponent', () => {
  let component: TablaHabitacionComponent;
  let fixture: ComponentFixture<TablaHabitacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaHabitacionComponent]
    });
    fixture = TestBed.createComponent(TablaHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
