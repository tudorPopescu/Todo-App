import { Component, OnInit } from '@angular/core';
import { List } from '../../interfaces/list';
import { TodoListService } from './../../services/todo-list.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoListService]
})
export class TodoComponent implements OnInit {
  todos: List[];
  todoId: number;
  todoTitle: string;
  todoCompleted: boolean;
  editable: boolean;
  filter: string;

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.todos = this.todoListService.todosList;
    this.todoId = 3;
    this.todoTitle = '';
    this.todoCompleted = false;
    this.editable = false;
    this.filter = 'all';
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
