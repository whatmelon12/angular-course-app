import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [
    './../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './login-form.component.css'
  ]
})
export class LoginFormComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
  }

}
