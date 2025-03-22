import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { InsertarProducte, Producte } from '../interfaces/producte';
import { map, Observable, pipe } from 'rxjs';
import { ProductesResponse, SingleProducteResponse } from '../interfaces/respostes';

@Injectable({
  providedIn: 'root'
})
export class ProducteService {
  #productesURL = 'producte';
  #http = inject(HttpClient);




  afegirProducte(producte : InsertarProducte): Observable<Producte>{
    return this.#http
      .post<SingleProducteResponse>(`${this.#productesURL}/afegir`, producte)
      .pipe(map((resp) => resp.producte));
  }


  getProductes(): Observable<ProductesResponse>{
    return this.#http
      .get<ProductesResponse>(this.#productesURL)
      .pipe(map((resp) => resp));
  }




}
