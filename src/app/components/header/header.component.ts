import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'aip-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: boolean; // Boolean flag to determine whether the user is logged in

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    // Subscribe the login status from auth service
    this.authService.loginStatus.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });

  }

  // Navigate to the sign in page
  public signInClick(): void {
    this.router.navigate(['/sign-in']);
  }

  // Sign out the current user and natigate to the home page
  public signOutClick(): void {
    localStorage.removeItem('userId');
    this.authService.changeLoginStatus();
    this.router.navigate(['/']);
  }

}
