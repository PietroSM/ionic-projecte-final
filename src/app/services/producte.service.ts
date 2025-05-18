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


  getProductes(pagina: number, search: string, temporada: string, propis: number = 0): Observable<ProductesResponse>{
    const params = new URLSearchParams({
      pagina: String(pagina),
      search,
      temporada,
      propis: String(propis)
    });
    return this.#http
      .get<ProductesResponse>(`${this.#productesURL}?${params.toString()}`)
      .pipe(map((resp) => resp));
  }

  putProducte(producte: InsertarProducte, id: string): Observable<void> {
    return this.#http
      .put<void>(`${this.#productesURL}/${id}/edit`, producte);
  }

  getProducte(id: string): Observable<Producte>{
    return this.#http
      .get<SingleProducteResponse>(`${this.#productesURL}/${id}`)
      .pipe(map((resp) => resp.producte));
  }


  deleteProducte(id: string): Observable<void>{
    return this.#http
      .put<void>(`${this.#productesURL}/borrar`, {id: id});
  }


}
