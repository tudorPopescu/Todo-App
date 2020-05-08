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

  constructor() { }

  ngOnInit(): void {
    this.todoId = 3;
    this.todoTitle = '';
    this.todoCompleted = false;

    this.todos = [
      {
        id: 1,
        title: 'First todo',
        completed: false
      },
      {
        id: 2,
        title: 'Second todo',
        completed: false
      }
    ];
  }

  addTodo() {
    if (this.todoTitle.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: this.todoId,
      title: this.todoTitle,
      completed: this.todoCompleted
    });

    this.todoId++;
    this.todoTitle = '';
  }

  removeTodo(todoId: number) {
    this.todos = this.todos.filter(todo => todoId !== todo.id);
  }

}
