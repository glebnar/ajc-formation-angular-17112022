import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSelfieComponent } from './new-selfie/new-selfie.component';
import { TestUnComponent } from './test-un/test-un.component';
import { ListSelfiesComponent } from './list-selfies/list-selfies.component';
import { RowSelfieComponent } from './row-selfie/row-selfie.component';
import { ListPlanetesComponent } from './list-planetes/list-planetes.component';



@NgModule({
  declarations: [
    NewSelfieComponent,
    ListSelfiesComponent,
    RowSelfieComponent,
    ListPlanetesComponent,
    TestUnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListSelfiesComponent,
    NewSelfieComponent
  ]
})
export class SelfieModule { }
