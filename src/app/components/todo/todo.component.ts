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

  constructor() { }

  ngOnInit(): void {
    this.todoId = 3;
    this.todoTitle = '';

    this.todos = [
      {
        id: 1,
        title: 'First todo'
      },
      {
        id: 2,
        title: 'Second todo'
      }
    ];
  }

  addTodo() {
    if (this.todoTitle.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: this.todoId,
      title: this.todoTitle
    });

    this.todoId++;
    this.todoTitle = '';
  }

}
