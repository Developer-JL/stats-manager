import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Team } from '../../models/team.model';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'aip-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  public team: Team = { name: '', players: [] };
  public teams: Team[];
  public hasTeam: boolean;

  private userId: string;
  private user: User;

  constructor(private router: Router, private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.userId = params['userId'];
        
        // Ininial the teams list
        this.updateTeamList();
      }
    );
  }

  // Create a new team and update the team list
  public createClick(): void {
    this.user.teams.push(this.team);
    this.userService.update(this.user).subscribe(() => {
      this.updateTeamList();
    });
  }

  // Navigate to the seleceted team team-page
  public onSelect(team: Team): void {
    this.router.navigate(['/players'], {
      queryParams: { teamName: team.name, userId: this.userId },
      queryParamsHandling: 'merge',
    });
  }

  // Update the team list
  private updateTeamList(): void {
    this.userService.getUserById(this.userId).subscribe((user) => {
      this.user = user;
      this.teams = user.teams;
      this.hasTeam = this.teams && this.teams.length > 0;
    });
  }

}
