import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonLabel, IonButton, IonIcon, IonRow, IonGrid, IonCol, IonButtons, IonImg } from '@ionic/angular/standalone';
import { rxResource } from '@angular/core/rxjs-interop';
import { CistellaService } from 'src/app/services/cistella.service';
import { Producte } from 'src/app/interfaces/producte';
import { liniaCistella } from 'src/app/interfaces/cistella';

@Component({
  selector: 'app-cistella-page',
  templateUrl: './cistella-page.page.html',
  styleUrls: ['./cistella-page.page.scss'],
  standalone: true,
  imports: [IonImg, IonButtons, IonCol, IonGrid, IonRow, IonIcon, IonButton, IonLabel, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CistellaPagePage {
  #cistellaService = inject(CistellaService);

  cistellaResource = rxResource({
    loader: () => this.#cistellaService.getCistella()
  });

  cistella = computed(() => this.cistellaResource.value());

  constructor() {
    effect(() => {

        console.log(this.cistella());

      
    })
  }

  eliminarProducte(){

  }

  
}
