import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../../models/team.model';

@Component({
  selector: 'aip-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  public teams: Team[];
  public hasTeam: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.teams = [
      { name: 'Dynama', players: [{ name: 'ABCD' }] },
      { name: 'Dr IQ', players: [{ name: 'ABCD' }, { name: 'ABCD' }] },
      { name: 'Magma', players: [] },
      { name: 'Tornado', players: [{ name: 'ABCD' }, { name: 'ABCD' }, { name: 'ABCD' }] }
    ];

    this.hasTeam = this.teams && this.teams.length > 0;
  }

  public createClick(): void {
    this.teams.push({ name: 'Test', players: [] });
  }

  public onSelect(team: Team): void {
    this.router.navigate(['/players'], {
      queryParams: { teamName: team.name },
      queryParamsHandling: 'merge',
    });
  }

}
