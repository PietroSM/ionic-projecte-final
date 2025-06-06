import { Component, computed, effect, inject, input, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, NavController, ToastController, AlertController, ModalController, IonTitle, IonToolbar, IonButtons, IonBackButton, IonImg, IonRow, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCol, IonIcon, IonButton, IonCardContent, IonGrid } from '@ionic/angular/standalone';
import { ProducteService } from 'src/app/services/producte.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProducteCardPage } from "../../producte/producte-card/producte-card.page";
import { ModalAfegirProductePage } from '../modal-afegir-producte/modal-afegir-producte.page';
import { CistellaService } from 'src/app/services/cistella.service';
import { XatService } from 'src/app/services/xat.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-detalls-producte',
  templateUrl: './detalls-producte.page.html',
  styleUrls: ['./detalls-producte.page.scss'],
  standalone: true,
  imports: [IonGrid, IonCardContent, RouterLink, IonButton, IonIcon, IonCol, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonRow, IonImg, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetallsProductePage{

  #producteService = inject(ProducteService);
  #cistellaService = inject(CistellaService);
  #xatService = inject(XatService);
  #modalCtrl = inject(ModalController);
  #alertCtrl = inject(AlertController);
  #toastCtrl = inject(ToastController);
  #nav = inject(NavController);


  iconEstacio = signal<string>("");
  

  id = input.required<string>();


  constructor(){
    effect(() =>{
      if(this.producte()){
        this.iconEstacio.set(this.getIconEstacio(this.producte()!.temporada));
      }
    })

  }

  productesResource = rxResource({
    request: () => this.id(),
    loader: ({request: id}) => this.#producteService.getProducte(id)
  });

  producte = computed(() => this.productesResource.value());



  getIconEstacio(temporada: string){
    switch (temporada) {
      case 'Primavera':
        return 'flower-outline';
      case 'Estiu':
        return 'sunny-outline';
      case 'Tardor':
        return 'leaf-outline';
      case 'Hivern':
        return 'snow-outline';
      default:
        return 'help-outline';
    }
  }



  async esborrarProducte(){

    const alerta = await this.#alertCtrl.create({
      header: 'Esborrar Producte',
      message: 'Estàs segura que vols esborrar aquest producte?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.#producteService
              .deleteProducte(this.id())
              .subscribe({
                next: async () => {
                  (await this.#toastCtrl.create({
                    duration: 3000,
                    header: 'Confirmat',
                    position: 'bottom',
                    message: 'Producte esborrat corractament',
                  })).present();
                  this.#nav.navigateRoot(['/home/inici']);
                },
                error: async (error) => {
                  (await this.#toastCtrl.create({
                    duration: 3000,
                    header: 'Error',
                    position: 'middle',
                    message: error.error.error,
                  })).present();
                }
              });
          }
        },
        {
          text: 'cancel·lar',
          role: 'cancel'
        }
      ],
    });
    alerta.present();
  }

  async afegirCistella(){
    const modal = await this.#modalCtrl.create({
      component: ModalAfegirProductePage,
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.4,
      componentProps: { producte: this.producte }
    });

    await modal.present();
    const result = await modal.onDidDismiss();

    if(result.data){
      this.#cistellaService.afegirProducteCistella(result.data.dadesAfegir)
      .subscribe({
        next: () => {
          this.#nav.navigateRoot(['/home/cistella']);
        },
        error: async (error) => {
          (await this.#toastCtrl.create({
              duration: 3000,
              header: 'Error',
              position: 'middle',
              message: error.error.error,
            })).present();
        }
      })
    }
  }


  obrirXat(){
    this.#xatService.crearXat(this.producte()!.client.id)
    .subscribe({
      next: (conversa: any) => {
          this.#nav.navigateRoot(['/xat/'+ conversa._id]);
      },
      error: (error) => {
        console.error('Error creant la conversa:', error);
      }
    });

  }

}


