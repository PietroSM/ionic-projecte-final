import {
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  IonContent,
  ModalController,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonItem, IonInput, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { Producte } from 'src/app/interfaces/producte';
import { InsertarProducteCistella } from 'src/app/interfaces/cistella';

@Component({
  selector: 'app-modal-afegir-producte',
  templateUrl: './modal-afegir-producte.page.html',
  styleUrls: ['./modal-afegir-producte.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, IonInput,
    IonItem,
    IonIcon,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule],
})
export class ModalAfegirProductePage {
  producte = input.required<Producte>();
  #modalCtrl = inject(ModalController);
  
  quantitat =  signal(0);
  preu = computed(() => this.quantitat() * this.producte().preu);
  
  actualitzarQuantitat(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const nouValor = parseInt(inputElement.value);
    if(nouValor){
      this.quantitat.set(nouValor);
    }else{
      this.quantitat.set(0);
    }
  }


  afegirCistella() {
    const dadesAfegir : InsertarProducteCistella = {
      idProducte: this.producte().id,
      quantitat: this.quantitat(),
      preuTotal: this.preu()
    }

    this.#modalCtrl.dismiss({ dadesAfegir: dadesAfegir });
  }

  close() {
    this.#modalCtrl.dismiss();
  }

}
