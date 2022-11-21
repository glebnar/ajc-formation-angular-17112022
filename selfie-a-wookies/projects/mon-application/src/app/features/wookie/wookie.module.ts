import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWookieComponent } from './list-wookie/list-wookie.component';



@NgModule({
  declarations: [
    ListWookieComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListWookieComponent
  ]
})
export class WookieModule { }
