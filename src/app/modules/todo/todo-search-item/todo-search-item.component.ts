import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IFilter } from 'src/app/TodoItem';

@Component({
  selector: 'app-todo-search-item',
  templateUrl: './todo-search-item.component.html',
  styleUrls: ['./todo-search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoSearchItemComponent {
  searchTerm: string = '';
  defaultFilter: boolean = false;
  importantFilter: boolean = false;
  completedFilter: boolean = false;

  constructor() {}

  searchTodoItems(): IFilter {
    const filters = {
      searchTerm: this.searchTerm,
      defaultFilter: this.defaultFilter,
      importantFilter: this.importantFilter,
      completedFilter: this.completedFilter,
    };
    return filters;
  }

  @Output()
  public parentEvent = new EventEmitter<IFilter>();
}
