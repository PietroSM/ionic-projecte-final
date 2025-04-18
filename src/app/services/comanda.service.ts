import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ComandaResponse, ComandesResponse, SingleComandaResponse } from '../interfaces/respostes';
import { Comanda, InsertarComanda } from '../interfaces/comanda';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {

  #comandaURL = 'comanda';
  #http = inject(HttpClient);


  crearComanda(dades: InsertarComanda): Observable<string>{
    return this.#http
      .post<ComandaResponse>(`${this.#comandaURL}`, dades)
      .pipe(map((resp) => resp.idComanda));
  }

  getComandes(): Observable<Comanda[]>{
    return this.#http
      .get<ComandesResponse>(`${this.#comandaURL}`)
      .pipe(map((resp) => resp.comandes));
  }

  getComanda(id: string): Observable<Comanda>{
    return this.#http
      .get<SingleComandaResponse>(`${this.#comandaURL}/${id}`)
      .pipe(map((resp) => resp.comanda));
  }


}
