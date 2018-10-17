import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouteGuardService } from './route-guard.service';

describe('RouteGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [RouteGuardService]
    });
  });

  let service: RouteGuardService;

  beforeEach(inject([RouteGuardService], _routeGuardService => {
    service = _routeGuardService;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('canActivate should be changed when user id exists', () => {

    localStorage.setItem('userId', 'testId');

    expect(service.canActivate()).toBeTruthy();
    
    localStorage.removeItem('userId');

    expect(service.canActivate()).toBeFalsy();
  });  
});
