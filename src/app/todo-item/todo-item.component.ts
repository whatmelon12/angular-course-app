import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: [
    './../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: Todo;

  constructor() { }

  ngOnInit() {
  }

}
