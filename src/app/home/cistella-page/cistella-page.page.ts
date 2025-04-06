import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { rxResource } from '@angular/core/rxjs-interop';
import { CistellaService } from 'src/app/services/cistella.service';

@Component({
  selector: 'app-cistella-page',
  templateUrl: './cistella-page.page.html',
  styleUrls: ['./cistella-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CistellaPagePage {
  #cistellaService = inject(CistellaService);

  cistellaResource = rxResource({
    loader: () => this.#cistellaService.getCistella()
  });


  cistella = computed(() => this.cistellaResource.value());

  constructor() {
    effect(() => {
      console.log(this.cistella());
    })
  }

}
