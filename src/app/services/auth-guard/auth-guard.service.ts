import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(): boolean {

    if (!localStorage.getItem('userId')) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

  isActivate(): boolean {
    
    if (!localStorage.getItem('userId')) {
      return false;
    }
    return true;
  }
}
