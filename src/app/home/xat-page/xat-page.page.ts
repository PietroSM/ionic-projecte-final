import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonCard, IonRow, IonGrid, IonButton, IonCol, IonCardSubtitle, IonCardTitle, IonCardHeader, IonButtons, IonBackButton, IonImg } from '@ionic/angular/standalone';
import { Xat } from 'src/app/interfaces/xat';
import { XatService } from 'src/app/services/xat.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-xat-page',
  templateUrl: './xat-page.page.html',
  styleUrls: ['./xat-page.page.scss'],
  standalone: true,
  imports: [IonImg, IonBackButton, RouterLink, IonButtons, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCol, IonButton, IonGrid, IonRow, IonCard, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class XatPagePage {

  xats = signal<Xat[]>([]);
  #xatsService = inject(XatService);


  constructor() { 
    this.#xatsService.getConverses()
      .subscribe((xats) => {
        this.xats.set(xats);
      });

    effect(() => {
      console.log(this.xats());
    });

  }


}
