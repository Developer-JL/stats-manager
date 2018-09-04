import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'aip-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public teamClick(): void {
    this.router.navigate(['/players']); 
  }

}
