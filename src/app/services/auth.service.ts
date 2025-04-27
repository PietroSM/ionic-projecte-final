import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Usuari, UsuariLogin } from '../interfaces/usuari';
import { catchError, from, map, Observable, of, pipe, switchMap } from 'rxjs';
import { SingleIdClient, SingleUsuariResponse, TokenResponse } from '../interfaces/respostes';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  #authURL = 'auth';
  #logged = signal(false);
  #http = inject(HttpClient);


  getLogged(): WritableSignal<boolean> {
    return this.#logged;
  }


  getIdClient(): Observable<string> {
    return this.#http
      .get<SingleIdClient>(`${this.#authURL}/client`)
      .pipe(map((resp) => resp.idClient));
  }


  registrar(usuari: Usuari): Observable<void>{
    return this.#http
      .post<SingleUsuariResponse>(`${this.#authURL}/registrar`, usuari)
      .pipe(
        switchMap(async (r) => {
          r.usuari;
        })
      );
  }


  login(dades: UsuariLogin): Observable<void>{
    return this.#http
      .post<TokenResponse>(`${this.#authURL}/login`, dades)
      .pipe(
        switchMap(async (r) => {
          try{
            await Preferences.set({key: 'fs-token', value: r.accesToken});
            this.#logged.set(true);
          } catch(error) {
            throw new Error('No es posible guardar el token en el emmagatzenatge!');
          }
        })
      );
  }


  async logout(): Promise<void> {
    await Preferences.remove({ key: 'fs-token' });
    this.#logged.set(false);
  }


  isLogged(): Observable<boolean> {
    if (this.#logged()) { 
      return of(true);
    }

    return from(Preferences.get({ key: 'fs-token' })).pipe(
      switchMap((token) => {
        if (!token.value) {
          return of(false);
        }

        return this.#http.get(`${this.#authURL}/validar`).pipe(
          map(() => {
            this.#logged.set(true);
            return true;
          }),
          catchError(() => of(false))
        );
      }),
    );
  }




}
