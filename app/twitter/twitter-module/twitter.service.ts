import { Tweet } from './tweet';

export class TwitterService {
	tweets : Tweet[] = [];
	getTweets() : Tweet[] {
		var tweet1 = <Tweet>{
			name:"",
			handle:"",
			img_url:"",
			message:""
		};
		var tweet2 = <Tweet>{
			name:"",
			handle:"",
			img_url:"",
			message:""
		};
		var tweet3 = <Tweet>{
			name:"",
			handle:"",
			img_url:"",
			message:""
		};
		tweet1.name = "Windward";
		tweet1.handle = "@windwardstudios";
		tweet1.img_url = "http://lorempixel.com/100/100/people?1";
		tweet1.message = "Looking for a better company reporting or docgen app";

		tweet2.name = "AngularJS News";
		tweet2.handle = "@angularjs_news";
		tweet2.img_url = "http://lorempixel.com/100/100/people?2";
		tweet2.message = "Right Relevance : Influencers, Articles and Conversations";

		tweet3.name = "UX & Bootstrap";
		tweet3.handle = "@3rdwave";
		tweet3.img_url = "http://lorempixel.com/100/100/people?3";
		tweet3.message = "10 Reasons Why Web Projects Fail";

		this.tweets.push(tweet1);
		this.tweets.push(tweet2);
		this.tweets.push(tweet3);
		
		return this.tweets;
	}	
}
