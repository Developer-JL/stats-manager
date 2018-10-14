import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'aip-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Navigate to sign up page
  public signUpClick(): void {
    this.router.navigate(['/sign-up']);
  }

}
