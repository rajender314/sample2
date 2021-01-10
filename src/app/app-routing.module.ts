
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TopratedMoviesComponent } from './movie-details/toprated-movies/toprated-movies.component';
import { UpcomingMoviesComponent } from './movie-details/upcoming-movies/upcoming-movies.component';



const routes: Routes = [
 
  {
    path: '', redirectTo: '/movie-details', pathMatch: 'full'
  },
  
  
  {
    path: 'movie-details', component:  MovieDetailsComponent
  },
  {
    path: 'toprated-movies', component:  TopratedMoviesComponent
  },
  {
    path: 'upcoming-movies', component:  UpcomingMoviesComponent
  }
 
];
@NgModule({
  // imports: [RouterModule.forRoot(routes)],    //lazy loading

  imports: [RouterModule.forRoot(routes)],    // preloading
  exports: [RouterModule]
})
export class AppRoutingModule { }
