import { Component } from '@angular/core';
import { Selfie } from './features/selfie/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selfie à wookies';
  subTitle = 'Une appli Star Wars';

  display(): void {
    console.info('Rorrraaa');
  }

  editSelfie(selfie: Selfie): void {
    console.info('Ca y est on a reussi !', selfie);
  }
}
