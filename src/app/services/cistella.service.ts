import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cistella, InsertarProducteCistella } from '../interfaces/cistella';
import { map, Observable } from 'rxjs';
import { CistellaResponse } from '../interfaces/respostes';

@Injectable({
  providedIn: 'root'
})
export class CistellaService {

  #cistellaURL = 'cistella';
  #http = inject(HttpClient);


  afegirProducteCistella(dades: InsertarProducteCistella): Observable<string>{
    return this.#http
      .post<CistellaResponse>(`${this.#cistellaURL}`, dades)
      .pipe(map((resp) => resp.resultat));
  }


  getCistella(): Observable<Cistella>{
    return this.#http
      .get<Cistella>(`${this.#cistellaURL}`)
      .pipe(map((resp) => resp));
  }





}
