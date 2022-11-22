import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Planete } from '../../../models';
import { LoggerService } from '../../../shared/tools/logger.service';
import { Selfie } from '../models';
import { SelfieService } from '../services/selfie.service';

@Component({
  selector: 'app-list-selfies',
  templateUrl: './list-selfies.component.html',
  styleUrls: ['./list-selfies.component.css']
})
export class ListSelfiesComponent implements OnInit {
  // selfies: string[] = ['', '', ''];
  // selfies =  ['', '', '']; Avant 3 ° jrnée de formation
  selfies: Selfie[] = [
    { titre: 'Grorraaaa avec Vador', description: 'Il fait chaud à Mustafar', imageUrl: '' },
    { titre: 'Avec Luku mon poto', description: 'Sur tatoooine', imageUrl: '' }
  ];

  planetes: Planete[] = [{ id: 4, label: 'Kashyyyk' },  { id: 1, label: 'Tatooine' }, { id: 2, label: 'Coruscant' }];

  @Output() editerSelfie = new EventEmitter<Selfie>();


  /**
   *
   */
  constructor(private logger: LoggerService,
              private selfieService: SelfieService) {
  }

  ngOnInit(): void {
    this.logger.log('coucou');

    // Ici ça fait rien
    const monRetour$ = this.selfieService.recupererTous();

    // Là, grâce à Subscribe, on appelle l'api et récupère les selfies
    const retourApi = (selfiesRetour: Selfie[]) => this.selfies = selfiesRetour;
    monRetour$.subscribe(retourApi);
  }



  preparerEditionSelfie(unSelfie: Selfie): void {
    console.info('On est prêt !!', unSelfie);

    // Je veux informer mon parent
    this.editerSelfie.emit(unSelfie);
  }

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
