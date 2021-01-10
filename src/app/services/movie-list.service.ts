import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  private topRatedApi = 'https://api.themoviedb.org/3/movie/top_rated?api_key=9ddd0928386eeaf37107e416c8ec61c6&language=en-US&page=1';

  private upComingApi = 'https://api.themoviedb.org/3/movie/upcoming?api_key=9ddd0928386eeaf37107e416c8ec61c6&language=en-US&page=1';

  constructor(
    private http: HttpClient,
  ) { }

  getTopratedMoviesList(param: any): Promise<any> {
    return this.http
      .post(this.topRatedApi, param)
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }

  getUpComingMoviesList(param: any): Promise<any> {
    return this.http
      .post(this.upComingApi, param)
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
