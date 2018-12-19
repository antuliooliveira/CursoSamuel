import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MDPedidosComponent } from './mdpedidos.component';

describe('MDPedidosComponent', () => {
  let component: MDPedidosComponent;
  let fixture: ComponentFixture<MDPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MDPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MDPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
