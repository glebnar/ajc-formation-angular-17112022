import { Component } from '@angular/core';
import { Selfie } from '../models';

@Component({
  selector: 'app-list-selfies',
  templateUrl: './list-selfies.component.html',
  styleUrls: ['./list-selfies.component.css']
})
export class ListSelfiesComponent {
  // selfies: string[] = ['', '', ''];
  // selfies =  ['', '', '']; Avant 3 ° jrnée de formation
  selfies: Selfie[] = [
    { titre: 'Grorraaaa avec Vador', description: 'Il fait chaud à Mustafar', imageUrl: '' },
    { titre: 'Avec Luku mon poto', description: 'Sur tatoooine', imageUrl: '' }
  ];

  deleteSelfie(): void {
    this.selfies.pop();
  }

  addSelfie(): void {
    this.selfies.push({ titre: 'Grorraaaa avec Vador', description: 'Il fait chaud à Mustafar', imageUrl: '' });
  }

  get isEmptyList(): boolean {
    return ! this.selfies || this.selfies.length === 0;
  }
}
