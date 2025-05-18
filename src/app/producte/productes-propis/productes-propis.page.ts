import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButtons, IonTitle, IonToolbar, IonHeader, IonImg, IonBackButton } from '@ionic/angular/standalone';
import { Producte } from 'src/app/interfaces/producte';
import { ProducteService } from 'src/app/services/producte.service';
import { ProducteCardPage } from '../producte-card/producte-card.page';

@Component({
  selector: 'app-productes-propis',
  templateUrl: './productes-propis.page.html',
  styleUrls: ['./productes-propis.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonImg, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, CommonModule, FormsModule, ProducteCardPage]
})
export class ProductesPropisPage {
  productes = signal<Producte[]>([]);
  #productesService = inject(ProducteService);


  ionViewWillEnter(){
    this.#productesService.getProductes(1,'','', 1)
    .subscribe((productes) => {
      const productesFiltrats = productes.productes.filter(
        element => element.propietat === true 
      );
      this.productes.set(productesFiltrats);
    });
  }

}
