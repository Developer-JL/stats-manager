import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'aip-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public user: User = new User();

  constructor(private router: Router, private auth: AuthService, private translateService: TranslateService) { }

  ngOnInit() {}

  public signUpClick(): void {

    this.auth.signup(this.user).subscribe((res) => {
      // If sign up success, navigate to sign in page
      if (res.status === 201) {
        this.router.navigate(['/sign-in']);
      }
    }, (err) => {
      // If the email already exists, display the error message
      if (err.status === 409) {
        const message: string = this.translateService.instant('common.emailExists.text');
        window.alert(message);
      }
      console.error(err);
    });
  }

  // Navigate back to home page
  public cancelClick(): void {
    this.router.navigate(['/']);
  }

}
