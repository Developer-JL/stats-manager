import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user.model';
import { TeamService } from '../../services/team/team.service';

@Component({
  selector: 'aip-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public user: User = new User();
  
  constructor(private router: Router, private auth: AuthService, private service: TeamService) { }

  ngOnInit() {}

  public signInClick(): void {

    this.auth.signin(this.user).subscribe((res) => {
      if (res.status === 200) {
        localStorage.setItem('userId', res.body.userId);
        this.service.toggle();
        this.router.navigate(['/teams'], {
          queryParams: { userId: res.body.userId },
          queryParamsHandling: 'merge',
        });
      }
    }, (err) => {
      window.alert('Incorrect Login details!');
      console.error(err);
    });

  }

  public cancelClick(): void {
    this.router.navigate(['/']);
  }

}
