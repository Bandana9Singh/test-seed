import { Component } from '@angular/core';
import { LikeComponent } from '../like/like.component';
import { Tweet } from './twitter-module/tweet';
import { TwitterService } from './twitter-module/twitter.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css'],
  providers : [TwitterService]
})
export class TwitterComponent{
	tweets;
	constructor(twitterService : TwitterService){
		this.tweets =  twitterService.getTweets();
		console.log(this.tweets);
	}	
}
