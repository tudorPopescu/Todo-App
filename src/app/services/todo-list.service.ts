import { Injectable } from '@angular/core';
import { List } from '../interfaces/list';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
todosList: List[];

  constructor() {
    this.todosList = [
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
    console.log(this.todosList);
  }
}
