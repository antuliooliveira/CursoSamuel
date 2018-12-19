import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteContadorComponent } from './teste-contador.component';

describe('TesteContadorComponent', () => {
  let component: TesteContadorComponent;
  let fixture: ComponentFixture<TesteContadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteContadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
