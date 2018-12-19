import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteCursoComponent } from './teste-curso.component';

describe('TesteCursoComponent', () => {
  let component: TesteCursoComponent;
  let fixture: ComponentFixture<TesteCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
