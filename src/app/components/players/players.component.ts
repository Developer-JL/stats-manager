import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Player } from '../../models/player.model';

@Component({
  selector: 'aip-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  public teamName: string;
  public players: Player[];
  public hasPlayer: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.teamName = params['teamName'];
      }
    );

    this.players = [
      {name: 'TestingA'},
      {name: 'TestingB'},
      {name: 'TestingC'},
      {name: 'TestingD'},
    ];

    this.hasPlayer = this.players && this.players.length > 0;
  }

}
