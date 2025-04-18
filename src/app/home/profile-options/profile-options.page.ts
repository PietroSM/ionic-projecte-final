import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonImg, IonCard, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-options',
  templateUrl: './profile-options.page.html',
  styleUrls: ['./profile-options.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonIcon, IonButton, IonCol, IonRow, IonGrid, IonCard, IonImg, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class ProfileOptionsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
