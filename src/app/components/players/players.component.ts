import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Player } from '../../models/player.model';
import { TeamService } from '../../services/team/team.service';
import { Team } from '../../models/team.model';
import { User } from '../../models/user.model';
import { Location } from '@angular/common';

@Component({
  selector: 'aip-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  public teamName: string;
  public players: Player[];
  public hasPlayer: boolean;
  public player: Player = {name: ''};

  private userId: string;
  private team: Team;
  private user: User;

  constructor(private route: ActivatedRoute, private teamService: TeamService, private location: Location) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.teamName = params['teamName'];
        this.userId = params['userId'];

        this.teamService.getUserById(this.userId).subscribe((user) => {
          this.user = user;
          this.team = user.teams.find((team) => { return team.name === this.teamName });
          this.players = this.team.players;
          this.hasPlayer = this.players && this.players.length > 0;
        });

      }
    );
  }

  public goBackClick(): void {
    this.location.back();
  }

  public createClick(): void {
    // var elementPos = array.map(function(x) {return x.id; }).indexOf(idYourAreLookingFor);
    // var objectFound = array[elementPos];
    // this.user.teams.push(this.team); items[index] = 1010;
    // this.players.push(this.player);
    this.team.players.push(this.player);

    const index = this.user.teams.map(team => {return team.name;}).indexOf(this.teamName); 
    console.log('the index is ', index);

    this.user.teams[index] = this.team;


    this.teamService.update(this.user).subscribe((user) => {
      this.teamService.getUserById(this.userId).subscribe((user) => {
        this.user = user;
        this.team = user.teams.find((team) => { return team.name === this.teamName });
        this.players = this.team.players;
        this.hasPlayer = this.players && this.players.length > 0;
      });
    });
  }

}
