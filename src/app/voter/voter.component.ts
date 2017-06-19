import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent{
	@Input('up-vote') upVote = false;
	@Input('down-vote') downVote = false;
	@Input('vote') vote = 10;
	isVoter(){
		this.upVote = true;
	}
}
