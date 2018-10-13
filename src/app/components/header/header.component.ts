import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'aip-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {

    this.authService.loginStatus.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });

  }

  public signInClick(): void {
    this.router.navigate(['/sign-in']);
  }

  public signOutClick(): void {
    localStorage.removeItem('userId');
    this.authService.changeLoginStatus();
    this.router.navigate(['/']);
  }

}
