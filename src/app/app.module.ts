import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './author.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LikeComponent } from './like/like.component';
import { VoterComponent } from './voter/voter.component';
import { TwitterComponent } from './twitter/twitter.component';
import { BuildInDirectivesComponent } from './build-in-directives/build-in-directives.component';
import { PipeComponent } from './pipe/pipe.component';
import { SummaryPipe } from './pipe/summary.pipe';
import { BsPanelComponent } from './bs-panel/bs-panel.component';
import { ZippyComponent } from './zippy/zippy.component';

import { FormModule } from './form/form.module';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    FavouriteComponent,
    LikeComponent,
    VoterComponent,
    TwitterComponent,
    BuildInDirectivesComponent,
    PipeComponent,
    SummaryPipe,
    BsPanelComponent,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }