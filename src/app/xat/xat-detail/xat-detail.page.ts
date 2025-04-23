import { Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';
import { XatService } from 'src/app/services/xat.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Preferences } from '@capacitor/preferences';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-xat-detail',
  templateUrl: './xat-detail.page.html',
  styleUrls: ['./xat-detail.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class XatDetailPage {
[x: string]: any;

  id = input.required<string>();
  #xatsService = inject(XatService);
  #authService = inject(AuthService);

  missatges = signal<any[]>([]);
  
  
  
  constructor() { 
    
    effect(() => {
      if(this.id()){
        this.#xatsService.unirseConversa(this.id());        
      }
    });
    
    this.#xatsService.escoltarMissatges().subscribe(
      missatge => {
        this.missatges.update(valorActual => [...valorActual, missatge]); 
      }
    )
    
    this.#authService.getIdClient()
      .subscribe(
        id => { console.log(id);}
      )
    
    
  }
  
  async enviarMissatge(text: any){
    console.log(text);
    let token = await Preferences.get({ key: 'fs-token' });

    this.#xatsService.enviarMissatge(this.id(),text, token.value!);

  }



}
