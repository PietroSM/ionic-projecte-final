import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, NavController, IonToolbar, IonButtons, IonImg, IonCard, IonGrid, IonRow, IonCol, IonIcon, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-options',
  templateUrl: './profile-options.page.html',
  styleUrls: ['./profile-options.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonIcon, IonCol, IonRow, IonGrid, IonCard, IonImg, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class ProfileOptionsPage {

  #authService = inject(AuthService);
    #nav = inject(NavController);



  constructor() { }


  tancarSessio() {
    this.#authService.logout();
    location.reload();
  }

}
