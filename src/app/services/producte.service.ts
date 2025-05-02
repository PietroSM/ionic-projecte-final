import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IdProducteResponse, InsertarProducte, Producte } from '../interfaces/producte';
import { map, Observable, pipe } from 'rxjs';
import { ProductesResponse, SingleProducteResponse } from '../interfaces/respostes';

@Injectable({
  providedIn: 'root'
})
export class ProducteService {
  #productesURL = 'producte';
  #http = inject(HttpClient);




  afegirProducte(producte : InsertarProducte): Observable<string>{
    return this.#http
      .post<IdProducteResponse>(`${this.#productesURL}/afegir`, producte)
      .pipe(map((resp) => resp.id));
  }


  getProductes(): Observable<ProductesResponse>{
    return this.#http
      .get<ProductesResponse>(this.#productesURL)
      .pipe(map((resp) => resp));
  }


  getProducte(id: string): Observable<Producte>{
    return this.#http
      .get<SingleProducteResponse>(`${this.#productesURL}/${id}`)
      .pipe(map((resp) => resp.producte));
  }


}
