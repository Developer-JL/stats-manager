import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        NgFormsModule,
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ SignInComponent ]
    })
    .compileComponents();
  }));

  let router: Router;

  beforeEach(inject(
    [],
    () => {
      fixture = TestBed.createComponent(SignInComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      router = TestBed.get(Router);
      spyOn(router, 'navigate');
    }
  ));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should navigate to home page`, () => {
    component.cancelClick();
    expect((router.navigate as any).calls.mostRecent().args[0]).toEqual([
      '/',
    ]);
  });
});
