import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonRow, IonCol, IonCardSubtitle, IonCardTitle, IonCardHeader, IonButtons, IonImg } from '@ionic/angular/standalone';
import { Missatge, Xat } from 'src/app/interfaces/xat';
import { XatService } from 'src/app/services/xat.service';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-xat-page',
  templateUrl: './xat-page.page.html',
  styleUrls: ['./xat-page.page.scss'],
  standalone: true,
  imports: [IonImg, RouterLink, IonButtons, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCol, IonRow, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class XatPagePage {

  xats = signal<Xat[]>([]);
  #xatsService = inject(XatService);
  #authService = inject(AuthService);
  
  

  // Signal clau valor per a guardar ultims missatges
  ultimsMissatges = signal<{ [id: string]: Missatge }>({});

  idEmisor = signal<string>('');


  constructor() { 
    this.#xatsService.getConverses()
      .subscribe((xats) => {
        this.xats.set(xats);

        xats.forEach((xat) => {
          this.#xatsService.getUltimMissatge(xat.id)
            .subscribe((missatge) => {
              this.ultimsMissatges.update((actual) => ({
                ...actual, [xat.id]: missatge
              }));
            });
        });

      });


      this.#authService.getIdClient()
      .subscribe(
        id => { this.idEmisor.set(id)}
      );  


    // effect(() => {
    //   console.log(this.xats());
    // });

  }


  obtenirUltimMissatge(xatId: string): string {
    const missatge = this.ultimsMissatges()[xatId];

    if(!missatge) {
      return 'No hi ha missatges';
    }

    return missatge.emisor == this.idEmisor() ?
          `Tu: ${missatge.text}` : missatge.text;
  }


}
