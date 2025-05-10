import { Component, effect, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, IonBadge, IonButton, IonLabel, IonItem, IonIcon, IonButtons, IonBackButton, IonImg, IonRow, IonCol } from '@ionic/angular/standalone';
import { Usuari } from 'src/app/interfaces/usuari';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.page.html',
  styleUrls: ['./perfil-page.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonImg, IonBackButton, IonButtons, IonIcon, IonItem, IonLabel, IonButton, IonBadge, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class PerfilPagePage {

  usuari = input.required<Usuari>();



  constructor() { 

    effect(() => {

        console.log(this.usuari()!);
      
    });
  }


  openModalProfile(){}


  openModalPassword(){}

  takePhoto(){}

  pickFromGallery(){}

}
