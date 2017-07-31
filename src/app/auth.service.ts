
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
declare var Storages: any;
@Injectable()
export class AuthService {
  data = <any>{};
  isAuthenticated: Boolean = false;
  constructor(private router: Router) { }

  authenticatenow(usercreds): Observable<any> {
    if (usercreds.userName == 'clarion@clarion.com' && usercreds.userPassword == 'Clarion123') {
      this.data['responseCode'] = 1000;
      this.data['auth_key'] = 'dasdjkdha88jnknkj';
    } else {
      this.data['responseCode'] = 'invalid';
      this.data['message'] = 'Invalid Credentials';
    }
    return this.data;
  }

}
