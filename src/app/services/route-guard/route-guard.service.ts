import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router) { }

  public canActivate(): boolean {

    if (!localStorage.getItem('userId')) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
