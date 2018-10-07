import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

const signupUrl = 'http://localhost:5000/api/user/signup';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

signUp(user: User): Observable<any> {
  return this.http.post<User>(signupUrl, user, {observe: 'response'});
}
}
