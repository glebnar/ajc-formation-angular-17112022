import { Component } from '@angular/core';
import { Selfie } from '../models';

@Component({
  selector: 'app-new-selfie',
  templateUrl: './new-selfie.component.html',
  styleUrls: ['./new-selfie.component.css']
})
export class NewSelfieComponent {
  selfie: Selfie = {description: '', imageUrl: '', titre: ''};

  save(): void {
    // je peux appeler mon api avec mon service en lui passant this.selfie
  }
}
