import { Component, OnInit } from '@angular/core';
import { List } from '../../interfaces/list';

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

  constructor() { }

  ngOnInit(): void {
    this.todoId = 3;
    this.todoTitle = '';
    this.todoCompleted = false;
    this.editable = false;

    this.todos = [
      {
        id: 1,
        title: 'First todo',
        completed: false,
        edit: false
      },
      {
        id: 2,
        title: 'Second todo',
        completed: false,
        edit: false
      }
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

}
