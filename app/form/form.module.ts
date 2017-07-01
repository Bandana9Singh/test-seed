import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
   ContactFormComponent,
   SubscriptionComponent,
   SignupFormComponent
  ],
  bootstrap: [ContactFormComponent],
  exports: [
  	ContactFormComponent,
  	SubscriptionComponent,
    SignupFormComponent
  ]
})
export class FormModule { 
}
