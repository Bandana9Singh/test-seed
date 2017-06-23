import { Component } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
	selector:'authors',
	template:`
		<h2>Author</h2>
		{{ title }}
		<ul>
			<li *ngFor="let author of authors">{{ author }}</li>
		</ul>
		`,
	providers : [AuthorService]
})
export class AuthorComponent{
	title = "The title for Author Page";
	authors;
	
	//Passing a variable in constructor
	constructor(authorService : AuthorService){
		this.authors = authorService.getAuthors();
	}	
}
