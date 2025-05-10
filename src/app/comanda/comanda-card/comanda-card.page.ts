import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonRow, IonGrid, IonCard, IonCol, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/angular/standalone';
import { Comanda } from 'src/app/interfaces/comanda';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comanda-card',
  templateUrl: './comanda-card.page.html',
  styleUrls: ['./comanda-card.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCardTitle, IonCardHeader, IonCol, IonCard, IonGrid, IonRow, CommonModule, FormsModule, RouterLink]
})
export class ComandaCardPage {

  comanda = input.required<Comanda>();


  iconEstat(estat: string){
    switch (estat) {
      case 'Cancelat':
        return 'alert-circle-outline';
      case 'Preparacio':
        return 'leaf-outline';
      case 'Enviat':
        return 'airplane-outline';
      case 'Entregat':
        return 'bag-check-outline';
      default :
        return 'cube-outline';
    }
  }

}
