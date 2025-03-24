import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Producte } from 'src/app/interfaces/producte';
import { ProducteService } from 'src/app/services/producte.service';
import { ProducteCardPage } from "../../producte/producte-card/producte-card.page";

@Component({
  selector: 'app-inici-producte',
  templateUrl: './inici-producte.page.html',
  styleUrls: ['./inici-producte.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ProducteCardPage]
})
export class IniciProductePage {

  productes = signal<Producte[]>([]);
  #productesService = inject(ProducteService);



  constructor(){
  this.#productesService.getProductes()
  .subscribe((productes) => {
    this.productes.set(productes.productes);
  });
    effect(() => {
      console.log(this.productes());
    });


  }


}
