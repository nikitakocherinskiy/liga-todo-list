import { Injectable } from '@angular/core';
import { TodoItem } from '../TodoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoItems: TodoItem[] = [];

  addTodoItem(item: TodoItem): void {
    this.todoItems.push(item);
  }

  deleteTodoItem(id: number): void {
    this.todoItems = this.todoItems.filter((item) => item.id !== id);
  }

  changeStatus(
    item: TodoItem,
    newStatus: 'default' | 'important' | 'completed'
  ): void {
    item.status = newStatus;
  }
}
