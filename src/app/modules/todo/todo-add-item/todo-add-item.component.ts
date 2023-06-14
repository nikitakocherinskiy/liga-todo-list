import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItem } from 'src/app/TodoItem';

@Component({
  selector: 'app-todo-add-item',
  templateUrl: './todo-add-item.component.html',
  styleUrls: ['./todo-add-item.component.scss'],
})
export class TodoAddItemComponent {
  title: string = '';
  constructor() {}

  addTodoItem(): TodoItem {
    const item = new TodoItem(
      Math.floor(Math.random() * 100),
      this.title,
      'default'
    );
    this.title = '';
    return item;
  }

  @Output()
  public parentEvent = new EventEmitter();
}
