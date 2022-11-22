import { Component } from '@angular/core';
import { Selfie } from './features/selfie/models';
import { LoggerService } from './shared/tools/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selfie à wookies';
  subTitle = 'Une appli Star Wars';

  /**
   *
   */
  constructor(private logger: LoggerService) {
  }

  // C'était avant typescript
  // private _logger: LoggerService;
  // constructor(logger: LoggerService) {
  //   this._logger = logger;
  // }

  display(): void {
    this.logger.log('Rorrraaa');
  }

  editSelfie(selfie: Selfie): void {
    // ce qui ne m'appartient pas, je ne l'instancie pas, je vais le récupérer
    // depuis l'injection de dépendances

    // const monLogger = new LoggerService();
    this.logger.log('Ca y est on a reussi !' + selfie);
  }
}
