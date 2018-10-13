import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../../services/auth-guard/auth-guard.service';
import { TeamService } from '../../services/team/team.service';

@Component({
  selector: 'aip-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: any;

  constructor(private router: Router, private some: AuthGuardService, private service: TeamService) { }

  ngOnInit() {
    this.service.change.subscribe(isOpen => {
      this.isLoggedIn = isOpen;
    });
;
  }

  public signInClick(): void {
    this.router.navigate(['/sign-in']);
  }

  public signOutClick(): void {
    localStorage.removeItem('userId');
    // this.isLoggedIn = false;
    this.service.toggle();
    this.router.navigate(['/']);
  }

}
