import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { TodoAddItemComponent } from './todo-add-item/todo-add-item.component';

@NgModule({
  declarations: [TodoListComponent, TodoItemComponent, TodoAddItemComponent],
  imports: [CommonModule, FormsModule],
  exports: [TodoListComponent, TodoItemComponent],
})
export class TodoModule {}
