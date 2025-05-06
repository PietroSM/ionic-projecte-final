import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Producte } from 'src/app/interfaces/producte';
import { ProducteService } from 'src/app/services/producte.service';
import { ProducteCardPage } from '../producte-card/producte-card.page';

@Component({
  selector: 'app-productes-propis',
  templateUrl: './productes-propis.page.html',
  styleUrls: ['./productes-propis.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ProducteCardPage]
})
export class ProductesPropisPage {
  productes = signal<Producte[]>([]);
  #productesService = inject(ProducteService);


  constructor() {
    // this.#productesService.getProductes()
    // .subscribe((productes) => {
    //   const productesFiltrats = productes.productes.filter(
    //     element => element.propietat === true 
    //   );
    //   this.productes.set(productesFiltrats);
    // });
  }

}
