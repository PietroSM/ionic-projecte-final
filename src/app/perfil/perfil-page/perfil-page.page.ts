import { Component, effect, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, ToastController, ModalController, IonTitle, IonToolbar, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, IonButton, IonIcon, IonButtons, IonBackButton, IonImg, IonRow, IonCol } from '@ionic/angular/standalone';
import { Usuari } from 'src/app/interfaces/usuari';
import { RouterLink } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { PerfilService } from 'src/app/services/perfil.service';
import { ModalContrasenyaPage } from '../modal-contrasenya/modal-contrasenya.page';

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.page.html',
  styleUrls: ['./perfil-page.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonImg, IonBackButton, IonButtons, IonIcon, IonButton, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class PerfilPagePage {

  #perfilService = inject(PerfilService);
  #modalCtrl = inject(ModalController);
  #toastCtrl = inject(ToastController);


  usuari = input.required<Usuari>();
  imatge = signal('');


  constructor() { 
    console.log("hola");
    effect(() => {
      this.imatge.set(this.usuari().imatge);
        console.log(this.usuari()!);
      
    });
  }




  async openModalPassword(){
    const modal = await this.#modalCtrl.create({
      component: ModalContrasenyaPage,
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.4,
    });
    await modal.present();
    const result = await modal.onDidDismiss();

    if(result.data) {
      this.#perfilService
        .putContrasenya(result.data.contrasenya, this.usuari().id!)
        .subscribe({
          next: async () => {
            (await this.#toastCtrl.create({
              duration: 3000,
              position: 'bottom',
              message: 'Contrasenya editada corractament!'
            })).present();
          }
        });
    }


  }

  async takePhoto(){
    const photo = await Camera.getPhoto({
      source: CameraSource.Camera,
      allowEditing: true,
      resultType: CameraResultType.DataUrl // Base64 (url encoded)
    });


    if(photo.dataUrl) {
      this.#perfilService.putImatge(photo.dataUrl as string, this.usuari()!.id!)
        .subscribe({
          next: () => this.imatge.set(photo.dataUrl as string)
        });
    }
  }

  async pickFromGallery(){
    const photo = await Camera.getPhoto({
      source: CameraSource.Photos,
      resultType: CameraResultType.DataUrl // Base64 (url encoded)
    });

    if(photo.dataUrl) {
      this.#perfilService.putImatge(photo.dataUrl as string, this.usuari()!.id!)
        .subscribe({
          next: () => this.imatge.set(photo.dataUrl as string)
        });
    }
  }




}
