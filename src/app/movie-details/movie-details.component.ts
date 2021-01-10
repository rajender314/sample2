import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public showTopRatedMovie =  true;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  gotoTopRatedMovies() {
    this.showTopRatedMovie = true;
    this.router.navigate(['/toprated-movies'])

  }
  gotoUpcomingMovies() {
    this.showTopRatedMovie = false;
    this.router.navigate(['/upcoming-movies'])

  }
}
