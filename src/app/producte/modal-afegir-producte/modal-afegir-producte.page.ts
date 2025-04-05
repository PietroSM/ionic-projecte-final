import {
  Component,
  computed,
  effect,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  ModalController,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonItem, IonInput } from '@ionic/angular/standalone';
import { Producte } from 'src/app/interfaces/producte';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { InsertarProducteCistella } from 'src/app/interfaces/cistella';

@Component({
  selector: 'app-modal-afegir-producte',
  templateUrl: './modal-afegir-producte.page.html',
  styleUrls: ['./modal-afegir-producte.page.scss'],
  standalone: true,
  imports: [IonInput, 
    IonItem,
    IonIcon,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ModalAfegirProductePage {
  producte = input.required<Producte>();
  #modalCtrl = inject(ModalController);
  
  quantitat =  signal(0);
  preu = computed(() => this.quantitat() * 3);
  
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
