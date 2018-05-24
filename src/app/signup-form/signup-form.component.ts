import { Component } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms'
import { validateCustom } from '../validators/custom.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      validateCustom
    ]),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }
}
