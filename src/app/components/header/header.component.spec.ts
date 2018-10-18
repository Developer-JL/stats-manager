import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  let router: Router;

  beforeEach(inject(
    [],
    () => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      router = TestBed.get(Router);
      spyOn(router, 'navigate');
    }
  ));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should navigate to sign in page`, () => {
    component.signInClick();
    expect((router.navigate as any).calls.mostRecent().args[0]).toEqual([
      '/sign-in',
    ]);
  });

  it(`should navigate to home page`, () => {
    component.signOutClick();
    expect((router.navigate as any).calls.mostRecent().args[0]).toEqual([
      '/',
    ]);
  });
});
