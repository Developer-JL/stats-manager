import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'aip-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public user: User = new User();
  
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  public signInClick(): void {

    this.auth.signin(this.user).subscribe((res) => {
      if (res.status === 200) {
        this.router.navigate(['/teams']);
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
