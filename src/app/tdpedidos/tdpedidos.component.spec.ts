import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDPedidosComponent } from './tdpedidos.component';

describe('TDPedidosComponent', () => {
  let component: TDPedidosComponent;
  let fixture: ComponentFixture<TDPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
