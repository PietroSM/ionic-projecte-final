import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton, IonCardTitle } from '@ionic/angular/standalone';
import { Producte } from 'src/app/interfaces/producte';

@Component({
  selector: 'app-producte-card',
  templateUrl: './producte-card.page.html',
  styleUrls: ['./producte-card.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonButton, IonCardContent, IonCardSubtitle, IonCardHeader, IonCol, IonRow, IonGrid, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProducteCardPage {

  producte = input.required<Producte>();



  constructor() { }



}
