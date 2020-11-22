import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarNotificacionComponent } from './eliminar-notificacion.component';

describe('EliminarNotificacionComponent', () => {
  let component: EliminarNotificacionComponent;
  let fixture: ComponentFixture<EliminarNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarNotificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
