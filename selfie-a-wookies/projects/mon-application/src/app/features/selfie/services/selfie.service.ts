import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apis } from 'projects/mon-application/src/environments/api';
import { Observable } from 'rxjs';
import { Selfie } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SelfieService {

  constructor(private httpClient: HttpClient) { }

  recupererTous(): Observable<Selfie[]> {
    const urlApi = apis.selfies.url;
    // Je veux appeler mon api et récupérer le retour de mon api, en json
    return this.httpClient.get<Selfie[]>(urlApi);
  }
}
