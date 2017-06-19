import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './author.component';
import { FavouriteComponent } from './favourite.component';
import { LikeComponent } from './like.component';
import { TwitterComponent } from './twitter/twitter.component';
import { VoterComponent } from './voter/voter.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    FavouriteComponent,
    LikeComponent,
    TwitterComponent,
    VoterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }