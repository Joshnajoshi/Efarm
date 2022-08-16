import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  isUserLoggedIn() {

    let user = sessionStorage.getItem('uname')
     console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('uname');
  }
}
