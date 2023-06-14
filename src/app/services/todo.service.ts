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

  getFilteredTodoItems(
    searchTerm: string,
    defaultFilter: boolean,
    importantFilter: boolean,
    completedFilter: boolean
  ): TodoItem[] {
    let filteredItems = this.todoItems;

    if (searchTerm) {
      filteredItems = filteredItems.filter((item) =>
        item.title.includes(searchTerm)
      );
    }
    if (defaultFilter) {
      filteredItems = filteredItems.filter((item) => item.status === 'default');
    }
    if (importantFilter) {
      filteredItems = filteredItems.filter(
        (item) => item.status === 'important'
      );
    }
    if (completedFilter) {
      filteredItems = filteredItems.filter(
        (item) => item.status === 'completed'
      );
    }
    return filteredItems;
  }
}
