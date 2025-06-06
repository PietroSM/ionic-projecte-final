import { Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonImg, IonBackButton, IonIcon } from '@ionic/angular/standalone';
import { Comanda } from 'src/app/interfaces/comanda';
import { ComandaService } from 'src/app/services/comanda.service';
import { ComandaCardPage } from '../comanda-card/comanda-card.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comandes',
  templateUrl: './comandes.page.html',
  styleUrls: ['./comandes.page.scss'],
  standalone: true,
  imports: [IonIcon, IonBackButton, IonImg, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ComandaCardPage]
})
export class ComandesPage {

  comandes = input.required<Comanda[]>();
  #comandesService = inject(ComandaService);
  #router = inject(Router);
  missatge = '';

  constructor(){
    this.missatgeBuit();
  }

  missatgeBuit() {
    const urlActual = this.#router.url;
    
    if (urlActual.includes('/vendes')) {
      this.missatge = 'Encara no has realitzat cap venda';
    } else {
      this.missatge = 'Encara no has fet cap comanda';
    }

  }

}
