import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Player } from '../../models/player.model';
import { UserService } from '../../services/user/user.service';
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
  public player: Player = { name: '' };

  private userId: string;
  private team: Team;
  private user: User;

  constructor(private route: ActivatedRoute, private userService: UserService, private location: Location) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.teamName = params['teamName'];
        this.userId = params['userId'];

        this.userService.getUserById(this.userId).subscribe((user) => {
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

    this.team.players.push(this.player);

    const index = this.user.teams.map(team => { return team.name; }).indexOf(this.teamName);

    this.user.teams[index] = this.team;


    this.userService.update(this.user).subscribe((user) => {
      this.userService.getUserById(this.userId).subscribe((user) => {
        this.user = user;
        this.team = user.teams.find((team) => { return team.name === this.teamName });
        this.players = this.team.players;
        this.hasPlayer = this.players && this.players.length > 0;
      });
    });
  }

}
