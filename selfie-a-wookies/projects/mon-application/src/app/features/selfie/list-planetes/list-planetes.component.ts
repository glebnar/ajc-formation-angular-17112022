import { Component, Input } from '@angular/core';
import { Planete } from '../../../models';

@Component({
  selector: 'app-list-planetes',
  templateUrl: './list-planetes.component.html',
  styleUrls: ['./list-planetes.component.css']
})
export class ListPlanetesComponent {
  // on va transformer le composant en composant agnostique

  @Input() list: Planete[] = [];
  // list: Planete[] = [{ id: 4, label: 'Kashyyyk' },  { id: 1, label: 'Tatooine' }, { id: 2, label: 'Coruscant' }];
  //, new Planete(3, 'Mustafar') ];
}
