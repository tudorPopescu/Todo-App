import { Component, OnInit } from '@angular/core';
import { TodoListService } from './../../services/todo-list.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoListService]
})
export class TodoComponent implements OnInit {
  todoTitle: string;
  todoCompleted: boolean;

  constructor(public todoList: TodoListService) { }

  ngOnInit(): void {
    this.todoTitle = '';
    this.todoCompleted = false;
  }

  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }

    this.todoList.addTodo(this.todoTitle, this.todoCompleted);

    this.todoTitle = '';
  }

  checkAll(): void {
    this.todoList.checkAll(!this.todoCompleted);
  }

  clearCompleted(): void {
    this.todoList.clearCompleted(this.todoCompleted);
  }
}
