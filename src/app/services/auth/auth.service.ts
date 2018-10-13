import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

const signupUrl = 'http://localhost:5000/api/user/signup';
const signinUrl = 'http://localhost:5000/api/user/signin';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  @Output() loginStatus: EventEmitter<boolean> = new EventEmitter();

  private isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  public signup(user: User): Observable<any> {
    return this.http.post<User>(signupUrl, user, { observe: 'response' });
  }

  public signin(user: User): Observable<any> {
    return this.http.post<User>(signinUrl, user, { observe: 'response' });
  }

  public changeLoginStatus(): void {
    this.isLoggedIn = !this.isLoggedIn;
    this.loginStatus.emit(this.isLoggedIn);
  }
}
