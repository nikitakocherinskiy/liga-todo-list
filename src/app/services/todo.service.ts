import { Injectable } from '@angular/core';
import { TodoItem } from '../TodoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoItems: TodoItem[] = [];
  filteredItems: TodoItem[] = [];

  addTodoItem(item: TodoItem): void {
    this.todoItems.push(item);
    this.filteredItems.push(item);
  }

  deleteTodoItem(id: number): void {
    this.todoItems = this.todoItems.filter((item) => item.id !== id);
    this.filteredItems = this.filteredItems.filter((item) => item.id !== id);
  }

  changeStatus(
    item: TodoItem,
    newStatus: 'default' | 'important' | 'completed'
  ): void {
    item.status = newStatus;
  }

  getFilteredTodoItems(
    searchTerm: string,
    defaultFilter: boolean,
    importantFilter: boolean,
    completedFilter: boolean
  ): void {
    this.filteredItems = this.todoItems.filter((task) =>
      task.title.includes(searchTerm)
    );
    if (completedFilter) {
      this.filteredItems = this.todoItems.filter(
        (item) => item.status === 'completed'
      );
    }
    if (importantFilter) {
      this.filteredItems = this.todoItems.filter(
        (item) => item.status === 'important'
      );
    }
    if (defaultFilter) {
      this.filteredItems = this.todoItems.filter(
        (item) => item.status === 'default'
      );
    }
  }
}
