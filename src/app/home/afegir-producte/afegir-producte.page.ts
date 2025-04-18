import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonIcon, IonImg, IonGrid, IonCol, IonRow, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { InsertarProducte } from 'src/app/interfaces/producte';
import { ProducteService } from 'src/app/services/producte.service';


@Component({
  selector: 'app-afegir-producte',
  templateUrl: './afegir-producte.page.html',
  styleUrls: ['./afegir-producte.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonRow, IonCol, IonGrid, IonImg, IonIcon, IonButton, IonLabel, IonCheckbox, IonInput, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AfegirProductePage {


  #fb = inject(NonNullableFormBuilder);
  #changeDetector = inject(ChangeDetectorRef);
  #producteService = inject(ProducteService);
  

  newProducte = this.#fb.group({
    nom: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    preu: [0, [Validators.required, Validators.min(0.01)]],
    enviament: [false],
    recogida: [false],
    temporada: ['', [Validators.required]],
    tipus: ['', [Validators.required]],
    imatge: ['', [Validators.required]],
    lat: [0],
    lng: [0]
  });
  

  constructor() {
    this.getLocation();
  }


  async getLocation() {
    const coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
    });

    this.newProducte.get('lat')?.setValue(coordinates.coords.latitude);
    this.newProducte.get('lng')?.setValue(coordinates.coords.longitude);
  }
  

  async pickFromGallery() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Photos,
      height: 200,
      width: 200,
      allowEditing: true,
      resultType: CameraResultType.DataUrl // Base64 (url encoded)
    });

    this.newProducte.get('imatge')?.setValue(photo.dataUrl as string);
    this.#changeDetector.markForCheck();
  }


  async takePhoto() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Camera,
      quality: 90,
      height: 200,
      width: 200,
      allowEditing: true,
      resultType: CameraResultType.DataUrl // Base64 (url encoded)
    });

    this.newProducte.get('imatge')?.setValue(photo.dataUrl as string);
    this.#changeDetector.markForCheck();
  }

  
  afegirProducte(){

    const nouProducte: InsertarProducte =  {
      nom: this.newProducte.getRawValue().nom,
      stock: this.newProducte.getRawValue().stock,
      preu: this.newProducte.getRawValue().preu,
      imatge: this.newProducte.getRawValue().imatge,
      lat: this.newProducte.getRawValue().lat,
      lng: this.newProducte.getRawValue().lng,
      enviament: this.newProducte.getRawValue().enviament,
      recogida: this.newProducte.getRawValue().recogida,
      temporada: this.newProducte.getRawValue().temporada,
      tipus: this.newProducte.getRawValue().tipus
    };

    console.log(nouProducte);

    this.#producteService.afegirProducte(nouProducte)
      .subscribe({
        next: () => {
          console.log("piola");
        },
        error: () => {
          console.log("fatal");
        }

    });


  }

}
