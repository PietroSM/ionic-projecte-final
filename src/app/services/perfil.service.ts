import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UpdateUsuari, Usuari } from '../interfaces/usuari';
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


  putPerfil(dades: UpdateUsuari, id: string): Observable<void> {
    return this.#http
      .put<void>(`${this.#perfilURL}/${id}/edit`, dades);
  }


  putImatge(imatge: string, id: string): Observable<void> {
    return this.#http
      .put<void>(`${this.#perfilURL}/${id}/imatge`, {imatge});
  }

  putContrasenya(contrasenya: string, id: string): Observable<void> {
    return this.#http
      .put<void>(`${this.#perfilURL}/${id}/contrasenya`,{contrasenya});
  }


}
