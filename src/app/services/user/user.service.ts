import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';

const userBaseUrl: string = 'http://localhost:5000/api/user/'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Call the server to get an existing user by user id
  public getUserById(userId:string): Observable<any> {
    return this.http.get<User>(userBaseUrl + userId);
  }

  // Call the server to update an existing user
  public update(user: User): Observable<any> {
    return this.http.put<User>(userBaseUrl, user);
  }
}
