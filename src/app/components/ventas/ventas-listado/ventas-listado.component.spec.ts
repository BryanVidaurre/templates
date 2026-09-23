import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasListadoComponent } from './ventas-listado.component';

describe('VentasListadoComponent', () => {
  let component: VentasListadoComponent;
  let fixture: ComponentFixture<VentasListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
