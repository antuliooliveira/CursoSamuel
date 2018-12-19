import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelsiusTwoComponent } from './celsius-two.component';

describe('CelsiusTwoComponent', () => {
  let component: CelsiusTwoComponent;
  let fixture: ComponentFixture<CelsiusTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelsiusTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelsiusTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
