import { Component, OnInit } from '@angular/core';
import { MovieListService } from 'src/app/services/movie-list.service';
import { MovieOverviewComponent } from 'src/app/dialogs/movie-overview/movie-overview.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toprated-movies',
  templateUrl: './toprated-movies.component.html',
  styleUrls: ['./toprated-movies.component.scss']
})
export class TopratedMoviesComponent implements OnInit {
  public topRatedMovies = [];
  public ImagePath = '';
  public showSpinner = true;
  constructor(
    private movieListService: MovieListService,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit() {
    let param = {
      api_key: '9ddd0928386eeaf37107e416c8ec61c6'
    }
    this.getTopRatedMovies(param);
    this.ImagePath = '/home/enterpi/Downloads/moviesapi/src/assets/test.png'

  }

  getTopRatedMovies(param) {
    this.movieListService
    .getTopratedMoviesList(param)
    .then(response => {
      // console.log(response)
      this.showSpinner = false;

      this.topRatedMovies =  response['results'];
    })
  }

  getMovieOverview(movie) {
    let dialogRef = this.dialog.open(MovieOverviewComponent, {
		  panelClass: 'alert-dialog',
      width: '600px',
      data: movie
		});
		dialogRef.afterClosed().subscribe(result => {
		
		});
  }
  goToPrev() {
    this.router.navigate(['/movie-details']);
  }
}
