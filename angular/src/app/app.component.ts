import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  userForm: FormGroup;
  passwordForm: FormGroup;
  login;
  password;
  passwordConfirm;
  birthYear;

  constructor(private formBuilder: FormBuilder) {
    this.login = formBuilder.control('', Validators.required);
    this.password = formBuilder.control('', Validators.required);
    this.birthYear = formBuilder.control('', Validators.required);
    this.passwordConfirm = formBuilder.control('', Validators.required);
    this.passwordForm = formBuilder.group({
      passwordConfirm: this.passwordConfirm,
      password: this.password,
    }, {validators: AppComponent.passwordMatch});
    this.userForm = formBuilder.group({
      login: this.login,
      passwordForm: this.passwordForm,
      birthYear: this.birthYear
    });

  }

  static passwordMatch(grop: FormGroup) {
    const password = grop.get('password').value;
    const confirm = grop.get('passwordConfirm').value;
    return password === confirm ? null : {matchError: true};
  }

  reset() {
    this.userForm.reset();
  }

  send() {
    console.log(this.userForm.value);
  }

}
