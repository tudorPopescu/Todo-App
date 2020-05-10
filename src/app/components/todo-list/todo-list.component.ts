import { Component, OnInit, Input } from '@angular/core';
import { TodoListService } from './../../services/todo-list.service';
import { List } from '../../interfaces/list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todo: List;

  constructor(public todoList: TodoListService) {}

  ngOnInit(): void {}
}
