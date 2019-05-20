import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifTodoComponent } from './modif-todo.component';

describe('ModifTodoComponent', () => {
  let component: ModifTodoComponent;
  let fixture: ComponentFixture<ModifTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
