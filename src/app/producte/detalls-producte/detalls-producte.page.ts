import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-detalls-producte',
  templateUrl: './detalls-producte.page.html',
  styleUrls: ['./detalls-producte.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetallsProductePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
