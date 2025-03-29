import { Component, computed, effect, inject, input, numberAttribute} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonImg, IonRow, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader } from '@ionic/angular/standalone';
import { ProducteService } from 'src/app/services/producte.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-detalls-producte',
  templateUrl: './detalls-producte.page.html',
  styleUrls: ['./detalls-producte.page.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonRow, IonImg, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetallsProductePage{

  #producteService = inject(ProducteService);
  

  id = input.required<string>();


  constructor(){
    effect(() =>{
      console.log(this.producte());

    })

  }

  productesResource = rxResource({
    request: () => this.id(),
    loader: ({request: id}) => this.#producteService.getProducte(id)
  });

  producte = computed(() => this.productesResource.value());







}


