import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,NavController,ToastController, IonTitle, IonToolbar, IonItem, IonList, IonLabel, IonButton, IonIcon, IonRow, IonGrid, IonCol, IonButtons, IonImg, IonCard } from '@ionic/angular/standalone';
import { CistellaService } from 'src/app/services/cistella.service';
import { InsertarComanda } from 'src/app/interfaces/comanda';
import { ComandaService } from 'src/app/services/comanda.service';
import { Cistella } from 'src/app/interfaces/cistella';

@Component({
  selector: 'app-cistella-page',
  templateUrl: './cistella-page.page.html',
  styleUrls: ['./cistella-page.page.scss'],
  standalone: true,
  imports: [IonCard, IonImg, IonButtons, IonCol, IonGrid, IonRow, IonIcon, IonButton, IonLabel, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CistellaPagePage {
  #cistellaService = inject(CistellaService);
  #comandaService = inject(ComandaService);
  #nav = inject(NavController);
  #toastCtrl = inject(ToastController);
  

  cistella = signal<Cistella | null>(null);

  ionViewWillEnter() {
    this.#cistellaService.getCistella()
    .subscribe({
      next: (resultat) => {
        this.cistella.set(resultat);
      }
    })


  }

  eliminarProducte(id: string){
    this.#cistellaService.deleteProducteCistella(id)
      .subscribe({
        next: () => {
          this.#cistellaService.getCistella()
          .subscribe({
            next: (resultat) => {
              this.cistella.set(resultat);
            }
          })
        },
        error: () => {
          console.log("piolant");
        }
      })
  }


  realitzarComanda(){

    const postComanda : InsertarComanda = {
      productes: this.cistella()!.productes,
      idCistella: this.cistella()!.idCistella,
      idVendedor: this.cistella()!.productes[0].producte.client.id,
      preuTotal: this.cistella()!.preuTotal
    };

    console.log(postComanda);

    this.#comandaService.crearComanda(postComanda)
      .subscribe({
        next: async (resultat) => {
          (await this.#toastCtrl.create({
            duration: 3000,
            header: 'Confirmat',
            position: 'bottom',
            message: 'Comanda realitzada corractament',
          })).present();
          this.#nav.navigateRoot(['/comandes/'+resultat]);
        },
        error: (error) => {console.log(error);}
      });
    
  }
  
}
