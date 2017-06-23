import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
	course = {
		title: "Angular 2 for Beginners",
		rating: 4.9745,
		students: 5981,
		price: 99.95,
		releaseDate: new Date(2016, 3, 1)
	}
}
