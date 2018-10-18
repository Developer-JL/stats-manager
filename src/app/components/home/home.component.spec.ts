import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  let router: Router;

  beforeEach(inject(
    [],
    () => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      router = TestBed.get(Router);
    }
  ));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should navigate to sign up page`, () => {
    spyOn(router, 'navigate');
    component.signUpClick();
    expect((router.navigate as any).calls.mostRecent().args[0]).toEqual([
      '/sign-up',
    ]);
  });
});
