import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router) { }

  // Use to protect the route with logged in user
  public canActivate(): boolean {
    if (!localStorage.getItem('userId')) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
