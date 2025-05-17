import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonContent,ToastController, NavController, IonList, IonItem, IonInput, IonGrid, IonButton, IonCol, IonRow, IonImg, IonCardContent, IonCardTitle, IonCardHeader, IonCard } from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariLogin } from 'src/app/interfaces/usuari';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonRow, IonCol, IonButton, IonGrid, IonInput, IonItem, IonList,
    IonContent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink],
})
export class LoginPage {

  #fb = inject(NonNullableFormBuilder);
  #authService = inject(AuthService);
  #nav = inject(NavController);
  #toastCtrl = inject(ToastController);
  
  
  coords = signal<[number, number]>([0, 0]);

  newLogin = this.#fb.group({
    alies: ['', [Validators.minLength(3), Validators.required]],
    contrasenya: ['', [Validators.required]],
  });

  constructor() {
    this.getLocation();
  }


  async getLocation() {
    const coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
    });

    this.coords.set([
      coordinates.coords.longitude,
      coordinates.coords.latitude,
    ]);
  }




  login(){
    const newLogin : UsuariLogin = {
      alies: this.newLogin.getRawValue().alies,
      contrasenya: this.newLogin.getRawValue().contrasenya,
      lat: this.coords()[0],
      lng: this.coords()[1]
    };


    this.#authService.login(newLogin)
      .subscribe({
        next: async () => {
          (await this.#toastCtrl.create({
            duration: 3000,
            position: 'bottom',
            message: 'Credencials correctes!'
          })).present();
          this.#nav.navigateRoot(['/home/inici']);
        },
        error: async (error) => {
          console.log(error);
          (await this.#toastCtrl.create({
            duration: 3000,
            header: 'Error',
            position: 'middle',
            message: error.error.error,
          })).present();
          console.log(error.error.error);
        }
      });

  }
}
