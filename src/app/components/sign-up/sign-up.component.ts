import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'aip-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public user: User = new User();

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  public signUpClick(): void {

    this.auth.signup(this.user).subscribe((res) => {
      if (res.status === 201) {
        this.router.navigate(['/sign-in']);
      }
    }, (err) => {
      if (err.status === 409) {
        window.alert('This email is already registered please choose another one or login!');
      }
      console.error(err);
    });
  }

  public cancelClick(): void {
    this.router.navigate(['/']);
  }

}
