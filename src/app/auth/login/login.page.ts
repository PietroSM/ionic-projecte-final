import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,NavController, IonList, IonItem, IonInput, IonGrid, IonButton, IonCol, IonTabButton, IonRow, IonImg } from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariLogin } from 'src/app/interfaces/usuari';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonImg, IonRow, IonCol, IonButton, IonGrid, IonInput, IonItem, IonList, 
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
})
export class LoginPage {

  #fb = inject(NonNullableFormBuilder);
  coords = signal<[number, number]>([0, 0]);
  #authService = inject(AuthService);
  #nav = inject(NavController);

  

  newLogin = this.#fb.group({
    alies: ['', [Validators.minLength(4), Validators.required]],
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
        next: () => {
          this.#nav.navigateRoot(['/home/inici']);
        },
        error: () => {
          console.log("fatal");
        }
      });

  }
}
