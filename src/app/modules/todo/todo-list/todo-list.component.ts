import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoItem } from 'src/app/TodoItem';
import { TodoService } from 'src/app/services/todo.service';
import { IFilter, IChangeStatus } from 'src/app/TodoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  constructor(public todoService: TodoService) {}

  addTodoItem(item: TodoItem): void {
    this.todoService.addTodoItem(item);
  }

  changeStatus(itemStatus: IChangeStatus) {
    this.todoService.changeStatus(itemStatus.item, itemStatus.newStatus);
  }

  removeTodoItem(id: number) {
    console.log(id);
    this.todoService.deleteTodoItem(id);
  }

  getFilteredTodoItems(filters: IFilter): void {
    console.log(
      filters.searchTerm,
      filters.defaultFilter,
      filters.importantFilter,
      filters.completedFilter
    );
    this.todoService.getFilteredTodoItems(
      filters.searchTerm,
      filters.defaultFilter,
      filters.importantFilter,
      filters.completedFilter
    );
  }
}
