import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { PlayersComponent } from './players.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgFormsModule,
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ PlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
