import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListSelfiesComponent } from './features/selfie/list-selfies/list-selfies.component';
import { RowSelfieComponent } from './features/selfie/row-selfie/row-selfie.component';
import { ListPlanetesComponent } from './features/selfie/list-planetes/list-planetes.component';
import { SelfieModule } from './features/selfie/selfie.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelfieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
