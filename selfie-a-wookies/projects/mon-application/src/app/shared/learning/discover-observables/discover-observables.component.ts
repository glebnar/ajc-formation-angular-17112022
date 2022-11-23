import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'saw-discover-observables',
  templateUrl: './discover-observables.component.html',
  styleUrls: ['./discover-observables.component.css']
})
export class DiscoverObservablesComponent implements OnInit {
  ngOnInit(): void {
    console.info('-------------------------------');

    // const promise = new Promise((resolve, reject) => {
    //   console.info('0. JE CALCULE PROMESSE');
    // });

    // pour la découverte des obs
    // const obs$ = new Observable(observer => {
    //   console.info('0. JE CALCULE');

    //   const rand = Math.random() * 100;
    //   observer.next(rand);
    //   observer.complete();

    //   for (let index = 0; index < 100; index++) {
    //     observer.next(`GOUTTE EAU ${index}`);
    //     // next(`GOUTTE EAU`);
    //   }
    // });

    // const maFonction = (item: any) => {
    //   console.info(item);
    // };
    // const next = maFonction;

    // next('<fkdwkkjwhck');
    // next(1);

    //this.afficher('dcfddffd');

    const obs$ = new Observable<number>(observer => {
      observer.next(10);
      observer.next(20);

      setTimeout(() => {
        observer.next(30);
      }, 1000);
    });

    const fonctionExecuteeAChaqueNext = (toto: any) => console.info(toto);

    obs$
    .pipe(
      map(item => item * 10),
      map(item => item + 5),
      filter(item => item > 200),
      map(item => item.toString()),
      map(item => item + ' !!'),
    )
    .subscribe(fonctionExecuteeAChaqueNext);
    // obs$.subscribe();

    // const obs2$ = new Observable(observer => console.info('0. JE CALCULE'));

    console.info('*******************************');
  }

  afficher(item: any): void {

  }

}
