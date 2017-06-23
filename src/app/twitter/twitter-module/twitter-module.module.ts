import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitterComponent } from '../twitter.component';

import { LikeComponent } from '../like.component';
import { Tweet } from './tweet';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	TwitterComponent,
  	LikeComponent,
  	Tweet,
  	
  ],
  bootstrap: [TwitterComponent]
})
export class TwitterModuleModule { }
