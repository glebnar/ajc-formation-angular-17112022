import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListSelfiesComponent } from './list-selfies/list-selfies.component';
import { RowSelfieComponent } from './row-selfie/row-selfie.component';

@NgModule({
  declarations: [
    AppComponent,
    ListSelfiesComponent,
    RowSelfieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
