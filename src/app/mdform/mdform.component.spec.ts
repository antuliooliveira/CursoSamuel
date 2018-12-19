import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MDFormComponent } from './mdform.component';

describe('MDFormComponent', () => {
  let component: MDFormComponent;
  let fixture: ComponentFixture<MDFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MDFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MDFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
