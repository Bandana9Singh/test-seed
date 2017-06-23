import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { SubscriptionComponent } from './subscription/subscription.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
   ContactFormComponent,
   SubscriptionComponent
  ],
  bootstrap: [ContactFormComponent],
  exports: [
  	ContactFormComponent,
  	SubscriptionComponent
  ]
})
export class FormModule { 
}
