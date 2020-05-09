import { Component, OnInit } from '@angular/core';
import { List } from '../../interfaces/list';
import { stringify } from 'querystring';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: List[];
  todoId: number;
  todoTitle: string;
  todoCompleted: boolean;
  editable: boolean;
  filter: string;

  constructor() { }

  ngOnInit(): void {
    this.todoId = 3;
    this.todoTitle = '';
    this.todoCompleted = false;
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

  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: this.todoId,
      title: this.todoTitle,
      completed: this.todoCompleted,
      edit: this.editable
    });

    this.todoId++;
    this.todoTitle = '';
  }

  removeTodo(todoId: number) {
    this.todos = this.todos.filter(todo => todoId !== todo.id);
  }

  getItems(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  checkAll(): void {
    this.todos.forEach(todo => (todo.completed = this.todoCompleted));
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

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => todo.completed === this.todoCompleted);
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
