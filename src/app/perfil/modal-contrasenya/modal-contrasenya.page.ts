import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IonContent,ModalController, IonHeader, IonTitle, IonToolbar, IonButtons, IonIcon, IonInput, IonItem, IonCardContent, IonCard, IonButton } from '@ionic/angular/standalone';
import { equalValues } from 'src/app/shared/validator/equals-values.validator';

@Component({
  selector: 'app-modal-contrasenya',
  templateUrl: './modal-contrasenya.page.html',
  styleUrls: ['./modal-contrasenya.page.scss'],
  standalone: true,
  imports: [IonButton, IonCard, IonCardContent, IonItem, IonInput, IonIcon, IonButtons, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ModalContrasenyaPage{

  #modalCtrl = inject(ModalController);
  #fb = inject(NonNullableFormBuilder);


  newContrasenya = this.#fb.group({
    contrasenya: '',
    contrasenya2: ''
  },
  {
    validators: equalValues('contrasenya', 'contrasenya2')
  });

  close() {
    this.#modalCtrl.dismiss();
  }

  canviarContrasenya(){
    this.#modalCtrl.dismiss({
      contrasenya: this.newContrasenya.getRawValue().contrasenya});
  }

}
