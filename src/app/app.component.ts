import { Component } from '@angular/core';

import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './author.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LikeComponent } from './like/like.component';
import { VoterComponent } from './voter/voter.component';
import { TwitterComponent } from './twitter/twitter.component';
import { BuildInDirectivesComponent } from './build-in-directives/build-in-directives.component';
import { PipeComponent } from './pipe/pipe.component';

@Component({
  selector: 'app-root',
  template: `
  		<h1>{{ title }}</h1>
  		<courses></courses>
  		<authors></authors>
  		<!-- Interpolation and following three are property binding-->
  		<a href="{{imageUrl}}">Redirect to google.com 1st way</a>
  		<!--following two are property binding-->
  		<!--keep the dom property in square bracket--><br>
  		<a [href]="imageUrl">Redirect to google.com 2nd way</a>
  		<!--use bind-src--><br>
  		<a bind-href="imageUrl">Redirect to google.com 3rd way</a><br>
      <!--Class binding-->
  		<button class="btn btn-primary" [class.active]="isActive">Submit</button>
      <!--Style Binding-->
      <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'grey'">Submit</button>
      <!--Event binding, small parenthesis-->
      <div (click)="onDivClick()">
        <button (click)="onClick($event)">Submit</button>
      </div>
      <button on-click="onClick()">Submit</button><br>
      <!-- 2 way binding-->
      <input type="text" [value]="title" (input)="title=$event.target.value" />
      <!--combination of event and property binding -->
      <input type="text" [(ngModel)]="title" />
      <input type="text" bindon-ngModel="title" />
      <input type="button" (click)="title = ''" value="Clear" />
      Preview: {{ title }}
      <br>
      <i class="glyphicon glyphicon-star"></i>
      <favourite [is-favourite]="post.isFavourite" (change)="onFavouriteChange($event)"></favourite>
      <br>
      <like [is-like]="like.isLike" [num]="like.num"></like>
      <br>
      <app-voter [vote-count]="voter.voteCount" [my-vote]="voter.myVote" (changeVote)="onVoterChange($event)"></app-voter>
      <app-twitter></app-twitter>
      <app-build-in-directives></app-build-in-directives>
      <app-pipe></app-pipe>
    `
})
export class AppComponent {	title = "My first Angular App";
	imageUrl = "https://www.google.co.in/";
	isActive = true;
  onClick($event){
    $event.stopPropagation();
    console.log("Clicked:" , $event);
  }
  onDivClick(){
    console.log("Handled on div");
  }
  post = {
    title : "Title",
    isFavourite : true
  }
  onFavouriteChange($event){
    console.log($event);
  }
  like = {
    isLike : false,
    num : 10
  }
  voter = {
    voteCount : 10,
    myVote : 0
  }
  onVoterChange($event){
    console.log($event);
  }
}
