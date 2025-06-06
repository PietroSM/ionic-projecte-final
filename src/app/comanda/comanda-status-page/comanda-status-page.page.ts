import { Component, computed, DestroyRef, effect, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonBackButton, IonButtons, IonImg, IonList, IonItem, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { ComandaService } from 'src/app/services/comanda.service';
import { rxResource, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UpdateComanda } from 'src/app/interfaces/comanda';

@Component({
  selector: 'app-comanda-status-page',
  templateUrl: './comanda-status-page.page.html',
  styleUrls: ['./comanda-status-page.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonSelect, IonSelectOption, IonCardTitle, IonCardHeader, IonCard, IonCol, IonRow, IonGrid, IonItem, IonList, IonImg, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ComandaStatusPagePage {

  #comandaService = inject(ComandaService);
  #destroyRef = inject(DestroyRef);


  id = input.required<string>();

  comandasResource = rxResource({
    request: () => this.id(),
    loader: ({request: id}) => this.#comandaService.getComanda(id)
  });

  comanda = computed(() => this.comandasResource.value());

  canviarEstat(event: any){

    const dades : UpdateComanda = {
      id: this.comanda()!.id,
      estatComanda: event.detail.value
    }

    this.#comandaService.putEstatComanda(dades)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: () => {},
        error: () => {}
      });
  }


}
