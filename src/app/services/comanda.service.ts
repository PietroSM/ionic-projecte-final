import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { InsertarProducte } from '../interfaces/producte';
import { map, Observable } from 'rxjs';
import { ComandaResponse } from '../interfaces/respostes';
import { InsertarComanda } from '../interfaces/comanda';

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


}
