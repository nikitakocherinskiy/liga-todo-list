import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSearchItemComponent } from './todo-search-item.component';

describe('TodoSearchItemComponent', () => {
  let component: TodoSearchItemComponent;
  let fixture: ComponentFixture<TodoSearchItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoSearchItemComponent]
    });
    fixture = TestBed.createComponent(TodoSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
