import { Component, Input } from '@angular/core';
import { Selfie } from '../models';

@Component({
  selector: 'app-row-selfie',
  templateUrl: './row-selfie.component.html',
  styleUrls: ['./row-selfie.component.css']
})
export class RowSelfieComponent {
 @Input() monSelfie !: Selfie;
}
