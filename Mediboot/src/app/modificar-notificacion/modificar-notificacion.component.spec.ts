import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarNotificacionComponent } from './modificar-notificacion.component';

describe('ModificarNotificacionComponent', () => {
  let component: ModificarNotificacionComponent;
  let fixture: ComponentFixture<ModificarNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarNotificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
