import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonRefresher, IonRefresherContent, IonInfiniteScrollContent, IonInfiniteScroll } from '@ionic/angular/standalone';
import { Producte } from 'src/app/interfaces/producte';
import { ProducteService } from 'src/app/services/producte.service';
import { ProducteCardPage } from "../../producte/producte-card/producte-card.page";

@Component({
  selector: 'app-inici-producte',
  templateUrl: './inici-producte.page.html',
  styleUrls: ['./inici-producte.page.scss'],
  standalone: true,
  imports: [IonInfiniteScroll, IonInfiniteScrollContent, IonRefresherContent, IonRefresher, IonSearchbar, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, ProducteCardPage]
})
export class IniciProductePage {

  productes = signal<Producte[]>([]);
  #productesService = inject(ProducteService);

  finished = false;
  contador = 2;
  search = '';

  ionViewWillEnter(){
    this.#productesService.getProductes(1,this.search)
    .subscribe((productes) => {
      this.productes.set(productes.productes);
      if (!productes.niHaMes) {
        this.finished = true;
      }
    });
  }


  // constructor(){
  //   this.#productesService.getProductes(1,this.search)
  //   .subscribe((productes) => {
  //     this.productes.set(productes.productes);
  //     if (!productes.niHaMes) {
  //       this.finished = true;
  //     }
  //   });
  // }

  reloadProductes(refresher?: IonRefresher){
    this.#productesService.getProductes(1,this.search)
    .subscribe({
      next: (productes) => {
        this.productes.set(productes.productes);
        refresher?.complete();
      }
    });
  }


  filterItems(){
    this.#productesService.getProductes(1,this.search)
    .subscribe((productes) => {
      this.productes.set(productes.productes);
    });
  }


  loadMoreItems(infinite?: IonInfiniteScroll) {
    this.#productesService.getProductes(this.contador, this.search)
    .subscribe({
      next: (productes) => {
        this.productes.set(this.productes().concat(productes.productes));
        this.contador++;
        infinite?.complete();
        if (!productes.niHaMes) {
          this.finished = true;
        }
      },
      error: (error) => console.log(error)
    });
  }
}
