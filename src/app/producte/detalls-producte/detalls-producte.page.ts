import { Component, computed, effect, inject, input, numberAttribute, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, ModalController, IonTitle, IonToolbar, IonButtons, IonBackButton, IonImg, IonRow, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCol, IonIcon, IonButton, IonCardContent, IonGrid } from '@ionic/angular/standalone';
import { ProducteService } from 'src/app/services/producte.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProducteCardPage } from "../../producte/producte-card/producte-card.page";
import { ModalAfegirProductePage } from '../modal-afegir-producte/modal-afegir-producte.page';
import { CistellaService } from 'src/app/services/cistella.service';


@Component({
  selector: 'app-detalls-producte',
  templateUrl: './detalls-producte.page.html',
  styleUrls: ['./detalls-producte.page.scss'],
  standalone: true,
  imports: [IonGrid, IonCardContent, IonButton, IonIcon, IonCol, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonRow, IonImg, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ProducteCardPage]
})
export class DetallsProductePage{

  #producteService = inject(ProducteService);
  #cistellaService = inject(CistellaService);
  #modalCtrl = inject(ModalController);
  iconEstacio = signal<string>("");
  

  id = input.required<string>();


  constructor(){
    effect(() =>{
      console.log(this.producte());
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

  editarProducte(){

  }


  esborrarProducte(){

  }

  async afegirCistella(){
    const modal = await this.#modalCtrl.create({
      component: ModalAfegirProductePage,
      componentProps: { producte: this.producte }
    });

    await modal.present();
    const result = await modal.onDidDismiss();

    if(result.data){
      this.#cistellaService.afegirProducteCistella(result.data.dadesAfegir)
      .subscribe({
        next: () => {},
        error: (error) => {console.log(error);}
      })
    }
  }


  obrirXat(){
    
  }

}


