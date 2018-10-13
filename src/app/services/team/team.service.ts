import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../../models/team.model';
import { User } from '../../models/user.model';

const teamUrl = 'http://localhost:5000/api/teams';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  public isOpen = false;

  constructor(private http: HttpClient) { }

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(teamUrl);
  }

  createTeam(team: Team): Observable<any> {
    return this.http.post<Team>(teamUrl, team, {observe: 'response'});
  }

  updateTeam(team: Team): Observable<any> {
    return this.http.post<Team>(teamUrl, team, {observe: 'response'});
  }

  getUserById(userId:string): Observable<any> {
    return this.http.get<User>('http://localhost:5000/api/user/' + userId);
  }

  update(user: User): Observable<any> {
    return this.http.put<User>('http://localhost:5000/api/user/', user);
  }
}
