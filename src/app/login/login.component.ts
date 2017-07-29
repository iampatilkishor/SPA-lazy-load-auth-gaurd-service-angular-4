import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from '../auth.service';
declare var Storages: any;
declare var data: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FormBuilder, AuthService]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  data = <any>{};
  response = <any>{};
  constructor(public router: Router, private formBuilder: FormBuilder, private auth: AuthService) {
    const emailPatternMatch = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/;
    const passwordPatternMatch = /[A-Z]+/;
    this.form = formBuilder.group({
      userName: ['', Validators.compose([Validators.required, Validators.pattern(emailPatternMatch)])],
      userPassword: ['', Validators.compose([Validators.required, Validators.pattern(passwordPatternMatch)])]
    });
  }

  onSubmit = function () {
    for (let i in this.form.controls) {
      this.form.controls[i].markAsTouched();
    }
    if (this.form.valid) {
      this.data = this.form.value;
      this.response = this.auth.authenticatenow(this.data)
      if (this.response.responseCode == 1000) {
        Cookie.set('auth_key', this.response.auth_key);
        Cookie.set('user_name', this.data.userName);
        this.isAuthenticated = true;
        this.router.navigate(['/dashboard/dashboard']);
      }

    }
  }

  ngOnInit() {

  }

}
