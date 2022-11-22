import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListSelfiesComponent } from './features/selfie/list-selfies/list-selfies.component';
import { RowSelfieComponent } from './features/selfie/row-selfie/row-selfie.component';
import { ListPlanetesComponent } from './features/selfie/list-planetes/list-planetes.component';
import { SelfieModule } from './features/selfie/selfie.module';
import { WookieModule } from './features/wookie/wookie.module';
import { LoggerService } from './shared/tools/logger.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SelfieModule,
    WookieModule
  ],
  providers: [
    // LoggerService => c'est l'ancienne façon d'injecter en singleton
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
