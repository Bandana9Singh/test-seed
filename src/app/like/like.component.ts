import {Component,Input} from '@angular/core';

@Component({
	selector:'like',
	templateUrl: `./like.component.html`,
	styles: [`
			.like{
				font-size : 30px;
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