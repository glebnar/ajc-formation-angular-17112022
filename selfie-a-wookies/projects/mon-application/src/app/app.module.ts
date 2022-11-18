import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListSelfiesComponent } from './list-selfies/list-selfies.component';
import { RowSelfieComponent } from './row-selfie/row-selfie.component';
import { ListPlanetesComponent } from './list-planetes/list-planetes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListSelfiesComponent,
    RowSelfieComponent,
    ListPlanetesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
