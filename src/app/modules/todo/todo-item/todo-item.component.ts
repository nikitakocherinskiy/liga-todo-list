import { Component, Input } from '@angular/core';
import { TodoItem } from 'src/app/TodoItem';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  private _item!: TodoItem;

  @Input() set item(item: TodoItem) {
    this._item = item;
  }

  get item(): TodoItem {
    return this._item;
  }
}
