import { Component } from '@angular/core';

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
}
