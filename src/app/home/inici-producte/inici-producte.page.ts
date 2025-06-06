import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, ActionSheetController, IonToolbar,IonSearchbar, IonRefresher, IonRefresherContent, IonInfiniteScrollContent, IonInfiniteScroll, IonCardContent, IonCard, IonRow, IonGrid, IonCol, IonSkeletonText, IonCardHeader, IonIcon, IonButtons, IonButton } from '@ionic/angular/standalone';
import { Producte } from 'src/app/interfaces/producte';
import { ProducteService } from 'src/app/services/producte.service';
import { ProducteCardPage } from "../../producte/producte-card/producte-card.page";

@Component({
  selector: 'app-inici-producte',
  templateUrl: './inici-producte.page.html',
  styleUrls: ['./inici-producte.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonIcon, IonCardHeader, IonSkeletonText, IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonInfiniteScroll, IonInfiniteScrollContent, IonRefresherContent, IonRefresher, IonSearchbar, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, ProducteCardPage]
})
export class IniciProductePage {

  productes = signal<Producte[]>([]);
  #productesService = inject(ProducteService);
  #actionSheetController = inject(ActionSheetController);
  data = signal(false);
  icon = signal<string>('menu-outline');

  finished = false;
  contador = 2;
  search = '';
  temporada = '';

  ionViewWillEnter(){
    this.finished = false;
    this.contador = 2;
    
    this.#productesService.getProductes(1,this.search, this.temporada)
    .subscribe((productes) => {
      this.productes.set(productes.productes);
      this.data.set(true);

      if (!productes.niHaMes) {
        this.finished = true;
      }
    });
  }
  
  
  reloadProductes(refresher?: IonRefresher){
    this.#productesService.getProductes(1,this.search, this.temporada)
    .subscribe({
      next: (productes) => {
        this.productes.set(productes.productes);
        refresher?.complete();
      }
    });
  }
  
  
  filterItems(){
    this.#productesService.getProductes(1,this.search, this.temporada)
    .subscribe((productes) => {
      this.productes.set(productes.productes);
    });
  }


  loadMoreItems(infinite?: IonInfiniteScroll) {
    this.#productesService.getProductes(this.contador, this.search, this.temporada)
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


  async obrirMenu() {
    const actionSheet = await this.#actionSheetController.create({
      header: 'Temporada',
      buttons: [
        {
          text: 'Ninguna',
          role: 'ninguna',
          icon: 'earth-outline',
          handler: () => {
            this.icon.set('earth-outline');
            this.temporada = '';
            this.filterItems();
          },
        },
        {
          text: 'Primavera',
          role: 'primavera',
          icon: 'flower-outline',
          handler: () => {
            this.icon.set('flower-outline');
            this.temporada = 'Primavera';
            this.filterItems();
          },
        },
        {
          text: 'Estiu',
          role: 'estiu',
          icon: 'sunny-outline',
          handler: () => {
            this.icon.set('sunny-outline');
            this.temporada = 'Estiu';
            this.filterItems();
          },
        },        
        {
          text: 'Tardor',
          role: 'tardor',
          icon: 'leaf-outline',
          handler: () => {
            this.icon.set('leaf-outline');
            this.temporada = 'Tardor';
            this.filterItems();
          },
        },
        {
          text: 'Hivern',
          role: 'hivern',
          icon: 'snow-outline',
          handler: () => {
            this.icon.set('snow-outline');
            this.temporada = 'Hivern';
            this.filterItems();
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
