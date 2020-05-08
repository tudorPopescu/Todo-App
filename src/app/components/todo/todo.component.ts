import { Component, OnInit } from '@angular/core';
import { List } from '../../interfaces/list';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: List[];

  constructor() { }

  ngOnInit(): void { }

}
