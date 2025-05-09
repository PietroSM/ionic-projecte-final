import { Component, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonLabel, IonButton, IonIcon, IonRow, IonGrid, IonCol, IonButtons, IonImg, IonCard } from '@ionic/angular/standalone';
import { rxResource } from '@angular/core/rxjs-interop';
import { CistellaService } from 'src/app/services/cistella.service';
import { InsertarComanda } from 'src/app/interfaces/comanda';
import { ComandaService } from 'src/app/services/comanda.service';

@Component({
  selector: 'app-cistella-page',
  templateUrl: './cistella-page.page.html',
  styleUrls: ['./cistella-page.page.scss'],
  standalone: true,
  imports: [IonCard, IonImg, IonButtons, IonCol, IonGrid, IonRow, IonIcon, IonButton, IonLabel, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CistellaPagePage {
  #cistellaService = inject(CistellaService);
  #comandaService = inject(ComandaService);

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


  realitzarComanda(){

    const postComanda : InsertarComanda = {
      productes: this.cistella()!.productes,
      idCistella: this.cistella()!.idCistella,
      idVendedor: this.cistella()!.productes[0].producte.client.id,
      preuTotal: this.cistella()!.preuTotal
    };

    console.log(postComanda);

    this.#comandaService.crearComanda(postComanda)
      .subscribe({
        next: (resultat) => {console.log(resultat);},
        error: (error) => {console.log(error);}
      });
    
  }
  
}
