import { Component } from '@angular/core';
import { SummaryPipe } from './summary.pipe';

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
	post = {
		title: "Angular Tutorial for Beginners",
		body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
	}
	canSave = true;
	task={
		title: "Review Application",
		assignee: null
	}
}
