import {Component,Input} from '@angular/core';

@Component({
	selector:'like',
	templateUrl: `app/like.template.html`,
	styles: [`
			.like{
				font-size : 30px;
				margin-left: 10%;
			}
			.glyphicon-heart{
				cursor:pointer;
			}
		`]
})
export class LikeComponent{
	@Input('is-like') isLike=false;
	@Input('num') num = 10;
	toggleLike(){
		this.isLike=!this.isLike;
		this.num += this.isLike ? 1 : -1;
	}
}