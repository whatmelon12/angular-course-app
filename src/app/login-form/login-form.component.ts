import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [
    './login-form.component.css'
  ]
})
export class LoginFormComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
  }

}
