import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratedMoviesComponent } from './toprated-movies.component';

describe('TopratedMoviesComponent', () => {
  let component: TopratedMoviesComponent;
  let fixture: ComponentFixture<TopratedMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopratedMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopratedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
