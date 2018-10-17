import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [AuthService]
    });
  });

  let service: AuthService;

  beforeEach(inject([AuthService], _authService => {
    service = _authService;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('loginStatus should be changed when changeLoginStatus() is being called', () => {

    let isLoggedIn: boolean;

    service.loginStatus.subscribe(result => {
      isLoggedIn = result;
    });

    expect(isLoggedIn).toBeFalsy();

    service.changeLoginStatus();

    expect(isLoggedIn).toBeTruthy();
  });


});
