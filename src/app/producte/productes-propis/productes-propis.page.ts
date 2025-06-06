import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButtons, IonTitle, IonToolbar, IonHeader, IonImg, IonBackButton, IonItem, IonLabel, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { Producte } from 'src/app/interfaces/producte';
import { ProducteService } from 'src/app/services/producte.service';
import { ProducteCardPage } from '../producte-card/producte-card.page';

@Component({
  selector: 'app-productes-propis',
  templateUrl: './productes-propis.page.html',
  styleUrls: ['./productes-propis.page.scss'],
  standalone: true,
  imports: [IonIcon, IonBackButton, IonImg, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, CommonModule, FormsModule, ProducteCardPage]
})
export class ProductesPropisPage {
  productes = signal<Producte[]>([]);
  #productesService = inject(ProducteService);
  contador = 1;

  ionViewWillEnter(){
    this.loadMoreItems();
  }


  

  loadMoreItems() {
    this.#productesService.getProductes(this.contador, '', '')
    .subscribe({
      next: (productes) => {
        const productesFiltrats = productes.productes.filter(
          element => element.propietat === true 
        );
        this.productes.set(this.productes().concat(productesFiltrats));
        this.contador++;
        if (productes.niHaMes) {
          this.loadMoreItems();
        }
      },
    });
  }

}
