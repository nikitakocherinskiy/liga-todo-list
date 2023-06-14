import { Component } from '@angular/core';
import { TodoItem } from 'src/app/TodoItem';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  constructor(public todoService: TodoService) {}

  addTodoItem(item: TodoItem): void {
    this.todoService.addTodoItem(item);
  }
}
