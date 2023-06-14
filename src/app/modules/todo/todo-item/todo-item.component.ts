import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TodoItem } from 'src/app/TodoItem';
import { IChangeStatus } from 'src/app/TodoItem';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  private _item!: TodoItem;

  @Input() set item(item: TodoItem) {
    this._item = item;
  }

  get item(): TodoItem {
    return this._item;
  }

  changeStatus(
    newStatus: 'default' | 'important' | 'completed'
  ): IChangeStatus {
    return { item: this.item, newStatus };
  }

  removeTodoItem(): number {
    return this._item.id;
  }

  @Output()
  public parentEvent = new EventEmitter();
}
