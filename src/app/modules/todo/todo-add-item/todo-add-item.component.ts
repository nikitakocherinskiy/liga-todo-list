import { Component } from '@angular/core';
import { TodoItem } from 'src/app/TodoItem';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-add-item',
  templateUrl: './todo-add-item.component.html',
  styleUrls: ['./todo-add-item.component.scss'],
})
export class TodoAddItemComponent {
  title: string = '';
  constructor(public todoService: TodoService) {}

  addTodoItem(): void {
    const item = new TodoItem(
      Math.floor(Math.random() * 100),
      this.title,
      'default'
    );
    this.todoService.addTodoItem(item);
    this.title = '';
  }
}
