import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { StudentModule } from './student/student.module';

// import { LightboxModule } from 'ngx-lightbox';


import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CustomPreloadingService } from './custom-preloading.service';

import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PriceEditorComponent } from './shared/components/price-editor/price-editor.component';
import { DropdownEditorComponent } from './shared/components/dropdown-editor/dropdown-editor.component';
import {MatSelectModule} from '@angular/material/select';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { ThemeService } from 'ng2-charts';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PixelKitModule } from 'pixel-kit';

import {
  MatToolbarModule, MatFormFieldModule, MatInputModule,
  MatOptionModule,  
  MatButtonModule, MatCardModule, MatTableModule,
  MatDividerModule
} from '@angular/material';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TopratedMoviesComponent } from './movie-details/toprated-movies/toprated-movies.component';
import { UpcomingMoviesComponent } from './movie-details/upcoming-movies/upcoming-movies.component';
import { MovieListService } from './services/movie-list.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MovieOverviewComponent } from './dialogs/movie-overview/movie-overview.component';

@NgModule({
  declarations: [
    AppComponent,
   
    PriceEditorComponent,
    DropdownEditorComponent,
    SnackbarComponent,
    MovieDetailsComponent,
    TopratedMoviesComponent,
    UpcomingMoviesComponent,
    MovieOverviewComponent
  ],
  imports: [
    BrowserModule,
    // StudentModule,
    FormsModule,
    AppRoutingModule,
    LightboxModule,
    GalleryModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule, MatFormFieldModule, MatInputModule,
    MatOptionModule,  
    MatButtonModule, MatCardModule, MatTableModule,
    MatDividerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    PixelKitModule,
    MatProgressSpinnerModule
   
  ],
  entryComponents: [
    PriceEditorComponent, 
    DropdownEditorComponent,
    SnackbarComponent,
    MovieOverviewComponent
  ],
  providers: [MovieListService],
  bootstrap: [AppComponent]
})
export class AppModule { }