import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map, Observable } from 'rxjs';
import { Missatge, MissatgesReponse, Xat, XatsResponse } from '../interfaces/xat';
import { Client } from '../interfaces/usuari';
import { SingleClientResponse } from '../interfaces/respostes';

@Injectable({
  providedIn: 'root'
})
export class XatService {

  // #socket: Socket;
  #http = inject(HttpClient);
  #socket = inject(Socket);
  #xatURL = 'xat';

  crearXat(idVendedor: string): Observable<void> {
    return this.#http
      .post<void>(`${this.#xatURL}`, { idVendedor });
  }


  unirseConversa(consersaId: string){
    this.#socket.emit('joinConversa', consersaId);
  }


  getConverses(): Observable<Xat[]>{
    return this.#http
      .get<XatsResponse>(this.#xatURL)
      .pipe(map((resp) => resp.xats));
  }


  getMissatges(conversaId: string): Observable<Missatge[]>{
    return this.#http
      .get<Missatge[]>(`${this.#xatURL}/${conversaId}`)
      .pipe(map((resp) => resp));
  }

  enviarMissatge(idConversa: string, text: string, token: string) {
    this.#socket.emit('enviarMissatge', {
      idConversa,
      text, 
      token
    });
  }

  escoltarMissatges(): Observable<Missatge> {
    return this.#socket.fromEvent('nouMissatge');
  }

  getReceptorConversa(idConversa: string): Observable<Client> {
    return this.#http
      .get<SingleClientResponse>(`${this.#xatURL}/receptor/${idConversa}`)
      .pipe(map((resp) => resp.client));
  }

  // escoltarErrors(): Observable<any> {
  //   return this.#socket.fromEvent('errorMissatge');
  // }


}
