import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuari } from '../interfaces/usuari';
import { SingleUsuariResponse } from '../interfaces/respostes';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  #perfilURL = 'perfil';
  #http = inject(HttpClient);

  getPerfil(id?: string): Observable<Usuari> {
    return id === undefined?
      this.#http.get<SingleUsuariResponse>(`${this.#perfilURL}/me`)
      .pipe(map((resp) => resp.usuari)) :
      this.#http.get<SingleUsuariResponse>(`${this.#perfilURL}/${id}`)
      .pipe(map((resp) => resp.usuari));
  }



}
