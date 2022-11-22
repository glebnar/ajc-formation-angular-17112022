import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Selfie } from '../models';

@Component({
  selector: 'app-row-selfie',
  templateUrl: './row-selfie.component.html',
  styleUrls: ['./row-selfie.component.css']
})
export class RowSelfieComponent implements OnInit {

 @Input() monSelfie !: Selfie;
 @Input() titre = '';

 @Output() pourEdition = new EventEmitter<Selfie>();

 ngOnInit(): void {
  /// Ici c'est pour comprendre le emit, on peut le faire, sans passer par un click de bouton
  // this.pourEdition.emit({ description: '', imageUrl: '', titre: 'coucou' });
  // this.pourEdition.emit({ description: '', imageUrl: '', titre: 'coucou' });
  // this.pourEdition.emit({ description: '', imageUrl: '', titre: 'coucou' });
 // this.pourEdition.emit(this.monSelfie);
 }

 clickToEditButton(): void {
  this.pourEdition.emit(this.monSelfie);
 }
}
