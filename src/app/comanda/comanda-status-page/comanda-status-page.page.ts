import { Component, computed, effect, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ComandaService } from 'src/app/services/comanda.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-comanda-status-page',
  templateUrl: './comanda-status-page.page.html',
  styleUrls: ['./comanda-status-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ComandaStatusPagePage {

  #comandaService = inject(ComandaService);

  id = input.required<string>();

  constructor() {

    effect(() => {
      console.log(this.comanda());
    });
  }

  comandasResource = rxResource({
    request: () => this.id(),
    loader: ({request: id}) => this.#comandaService.getComanda(id)
  });

  comanda = computed(() => this.comandasResource.value());



}
