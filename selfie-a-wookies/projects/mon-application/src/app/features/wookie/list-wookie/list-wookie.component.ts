import { Component } from '@angular/core';
import { Wookie, WookieList } from '../models';

@Component({
  selector: 'app-list-wookie',
  templateUrl: './list-wookie.component.html',
  styleUrls: ['./list-wookie.component.css']
})
export class ListWookieComponent {
  // list: Wookie[] = [{ prenom: 'Chewie', nbPoils: 10000, taille: 300  },
  //                   { prenom: 'Chewie', nbPoils: 10000, taille: 300  }];

  list: WookieList = [{ prenom: 'Chewie', nbPoils: 10000, taille: 300  },
                      { prenom: 'Chewie 2', nbPoils: 10000, taille: 300  },
                      { prenom: 'Chewie 3', nbPoils: 10000, taille: 300  }];
}
