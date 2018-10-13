import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Team } from '../../models/team.model';
import { TeamService } from '../../services/team/team.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'aip-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  public team: Team = {name:'', players:[]};
  public teams: Team[];
  public hasTeam: boolean;

  private userId: string;
  private user: User;

  constructor(private router: Router, private teamService: TeamService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.userId = params['userId'];

        this.teamService.getUserById(this.userId).subscribe((user) => {
          this.user = user;
          this.teams = user.teams;
          this.hasTeam = this.teams && this.teams.length > 0;
        });
      }
    );
    
    // this.updateTeams();
  }

  public createClick(): void {

    this.user.teams.push(this.team);

    this.teamService.update(this.user).subscribe((user) => {
      console.log(this.user);
      this.teamService.getUserById(this.userId).subscribe((user) => {
        this.user = user;
        this.teams = user.teams;
        this.hasTeam = this.teams && this.teams.length > 0;
      });
    });
    // this.teamService.createTeam(this.team).subscribe((res) => {
    //   this.updateTeams();
    // }, (err) => {
    //   if (err.status === 409) {
    //     window.alert('This email is already registered please choose another one or login!');
    //   }
    //   console.error(err);
    // });
    // this.teams.push({ name: 'Test', players: [] });
  }

  public onSelect(team: Team): void {
    this.router.navigate(['/players'], {
      queryParams: { teamName: team.name, userId: this.userId },
      queryParamsHandling: 'merge',
    });
  }

  private updateTeams(): void {
    this.teamService.getTeams().subscribe((teams) => {
      this.teams = teams;
      this.hasTeam = this.teams && this.teams.length > 0;
    });
  }

}
