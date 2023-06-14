export class TodoItem {
  id: number;
  title: string;
  status: 'default' | 'important' | 'completed';

  constructor(
    id: number,
    title: string,
    status: 'default' | 'important' | 'completed'
  ) {
    this.id = id;
    this.title = title;
    this.status = status;
  }
}

export interface IFilter {
  searchTerm: string;
  defaultFilter: boolean;
  importantFilter: boolean;
  completedFilter: boolean;
}

export interface IChangeStatus {
  item: TodoItem;
  newStatus: 'default' | 'important' | 'completed';
}
