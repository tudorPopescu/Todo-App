import { Injectable } from '@angular/core';
import { List } from '../interfaces/list';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todos: List[];
  todoId: number;
  editable: boolean;
  filter: string;

  constructor() {
    this.todoId = 3;
    this.editable = false;
    this.filter = 'all';

    this.todos = [
      {
        id: 1,
        title: 'Learn Angular',
        completed: false,
        edit: false
      },
      {
        id: 2,
        title: 'Take over the world',
        completed: false,
        edit: false
      },
      {
        id: 3,
        title: 'Change car tire',
        completed: false,
        edit: false
      },
      {
        id: 4,
        title: 'Go for a jog',
        completed: false,
        edit: false
      },
    ];
  }

  addTodo(todoTitle: string, todoCompleted: boolean): void {
    this.todos.push({
      id: this.todoId,
      title: todoTitle,
      completed: todoCompleted,
      edit: this.editable
    });

    this.todoId++;
  }

  removeTodo(todoId: number) {
    this.todos = this.todos.filter(todo => todoId !== todo.id);
  }

  getItems(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  checkAll(todoCompleted: boolean): void {
    this.todos.forEach(todo => (todo.completed = !todoCompleted));
  }

  editTodoTitle(todo): boolean {
    return todo.edit = !this.editable;
  }

  cancelEditTitle(todo): boolean {
    return todo.edit = this.editable;
  }

  updateTitle(todo: List, data: Event): boolean {
    todo.title = (data.target as HTMLInputElement).value;
    return todo.edit = this.editable;
  }

  clearCompleted(todoCompleted: boolean): void {
    this.todos = this.todos.filter(todo => todo.completed === todoCompleted);
  }

  filterTodo(): List[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed);
    } else if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.completed);
    }

    return this.todos;
  }
}
