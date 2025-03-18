import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar, IonList, IonItem, IonInput, IonGrid, IonButton, IonCol, IonTabButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCol, IonButton, IonGrid, IonInput, IonItem, IonList, 
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class LoginPage {

  #fb = inject(NonNullableFormBuilder);


  newLogin = this.#fb.group({
    alies: ['', [Validators.minLength(4), Validators.required]],
    contrasenya: ['', [Validators.required]],
  });

  login(){

  }
}
