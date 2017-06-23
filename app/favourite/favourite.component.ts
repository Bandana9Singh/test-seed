import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector : 'favourite',
	templateUrl : `./favourite.component.html`,
	styles: [`
			.glyphicon-star {
				color: orange;
			}
			.glyphicon{ 
				font-size: 25px;
			}
		`]
})
export class FavouriteComponent {
	@Input('is-favourite') isFavourite = false;

	@Output() change = new EventEmitter();

	toggleIcon(){
		this.isFavourite = !this.isFavourite;
		this.change.emit({
			newValue: this.isFavourite
		});
	}
}
