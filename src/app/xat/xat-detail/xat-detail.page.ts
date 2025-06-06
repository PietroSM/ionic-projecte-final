import { Component, effect, inject, input, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonFooter, IonButtons, IonBackButton, IonAvatar } from '@ionic/angular/standalone';
import { XatService } from 'src/app/services/xat.service';
import { Preferences } from '@capacitor/preferences';
import { AuthService } from 'src/app/services/auth.service';
import { Client } from 'src/app/interfaces/usuari';

@Component({
  selector: 'app-xat-detail',
  templateUrl: './xat-detail.page.html',
  styleUrls: ['./xat-detail.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonBackButton, IonButtons, IonFooter, IonButton, IonInput, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class XatDetailPage {

  id = input.required<string>();
  #xatsService = inject(XatService);
  #authService = inject(AuthService);
  idEmisor = signal<string>('');
  missatges = signal<any[]>([]);
  receptor = signal<Client | null>(null);

  @ViewChild(IonContent) private content?: IonContent;



  
  constructor() { 
    
    effect(() => {
      if(this.id()){
        this.#xatsService.unirseConversa(this.id());    
      }
      
    });

    effect(() => {
      if(this.id()){
        this.#xatsService.getReceptorConversa(this.id())
          .subscribe({
            next: (client) => {this.receptor.set(client)}
          })
      }
    });

    effect(() => {
      if(this.id()){
        this.#xatsService.getMissatges(this.id()).subscribe({
          next: (missatges) => { 
            this.missatges.set(missatges);
          },
          error: () => {}
        });
      }
    });
    
    this.#xatsService.escoltarMissatges().subscribe(
      missatge => {
        this.missatges.update(valorActual => [...valorActual, missatge]); 
      }
    );
    
    this.#authService.getIdClient()
      .subscribe(
        id => { this.idEmisor.set(id)}
      );    

      effect(() => {
        const currentMessages = this.missatges();

        // setTimeout(() => {
          if (this.content && currentMessages.length > 0) {
             this.content.scrollToBottom(300); 
          }
        // }, 0);
      });


  }
  
  async enviarMissatge(text: any){
    let token = await Preferences.get({ key: 'fs-token' });

    this.#xatsService.enviarMissatge(this.id(),text, token.value!);

  }



}
