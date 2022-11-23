import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSelfiesComponent } from './features/selfie/list-selfies/list-selfies.component';
import { ListWookieComponent } from './features/wookie/list-wookie/list-wookie.component';

const routes: Routes = [
  {
    path:'selfies',
    component:ListSelfiesComponent
  },
  {
    path:'wookies',
    component:ListWookieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
