import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent{
	@Input('vote-count') voteCount=0;
	@Input('my-vote') myVote=0;

	@Output() changeVote = new EventEmitter();

	upVote(){
		if(this.myVote==1){
			console.log("Already upvoted");
			return;
		}	
		this.myVote = this.myVote + 1;
		this.changeVote.emit({ myVote : this.myVote});
	}
	downVote(){
		if(this.myVote==-1){
			console.log("Already downvoted");
			return;
		}		
		this.myVote=this.myVote - 1;
		this.changeVote.emit({ myVote : this.myVote});
	}
}
