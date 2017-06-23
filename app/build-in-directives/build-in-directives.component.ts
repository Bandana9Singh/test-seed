import { Component } from '@angular/core';

@Component({
  selector: 'app-build-in-directives',
  templateUrl: './build-in-directives.component.html',
  styleUrls: ['./build-in-directives.component.css']
})
export class BuildInDirectivesComponent {
	course = [];
	viewMode = 'map';
	courses = ['Course 1','Course 2','Course 3'];
}
