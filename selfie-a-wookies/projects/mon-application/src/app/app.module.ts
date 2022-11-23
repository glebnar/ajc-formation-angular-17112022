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
import { DiscoverObservablesDeuxComponent } from './shared/learning/discover-observables-deux/discover-observables-deux.component';
import { DiscoverObservablesComponent } from './shared/learning/discover-observables/discover-observables.component';
import { MenuPrincipalComponent } from './shared/components/menu-principal/menu-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverObservablesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SelfieModule,
    WookieModule,
    DiscoverObservablesDeuxComponent,
    MenuPrincipalComponent
  ],
  providers: [
    // LoggerService => c'est l'ancienne façon d'injecter en singleton
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
