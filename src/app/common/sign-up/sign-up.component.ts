import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'aip-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public signUpClick(): void {
    this.router.navigate(['/sign-in']);
  }

  public cancelClick(): void {
    this.router.navigate(['/']);
  }

}
