import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './../usernameValidators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
	
	/*form = new FormGroup({
		username : new FormControl('',Validators.required),
		password : new FormControl('',Validators.required)
	});
	*/

	form: FormGroup;
	constructor(fb: FormBuilder){
		this.form = fb.group({
			username: ['', 
				Validators.compose([Validators.required,UsernameValidators.cannotContainSpace])
			],
			password: ['', Validators.required]
		})
	}
	
	signup(){
		console.log(this.form.value);
	}
	
	upClick(){
		console.log(this.form);
	}
}
