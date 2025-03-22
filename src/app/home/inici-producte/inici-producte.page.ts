import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inici-producte',
  templateUrl: './inici-producte.page.html',
  styleUrls: ['./inici-producte.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class IniciProductePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
