import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonLabel, IonButton, IonIcon, IonImg, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthService } from 'src/app/services/auth.service';
import { Usuari } from 'src/app/interfaces/usuari';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonImg, IonIcon, IonButton, IonLabel, IonInput, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class RegisterPage  {

  #fb = inject(NonNullableFormBuilder);
  #changeDetector = inject(ChangeDetectorRef);
  #authService = inject(AuthService);


  newUsuari = this.#fb.group({
    alies: ['', [Validators.required, Validators.minLength(4)]],
    contrasenya: ['', [Validators.required, Validators.minLength(8)]],
    nom: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
    cognom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    correu: ['', [Validators.required, Validators.email]],
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

    this.newUsuari.get('lat')?.setValue(coordinates.coords.latitude);
    this.newUsuari.get('lng')?.setValue(coordinates.coords.longitude);
  }


  async pickFromGallery() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Photos,
      height: 200,
      width: 200,
      allowEditing: true,
      resultType: CameraResultType.DataUrl // Base64 (url encoded)
    });

    this.newUsuari.get('imatge')?.setValue(photo.dataUrl as string);
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

    this.newUsuari.get('imatge')?.setValue(photo.dataUrl as string);
    this.#changeDetector.markForCheck();
  }



  
  afegirUsuari(){
    const newUsuari : Usuari = {
      alies: this.newUsuari.getRawValue().alies,
      contrasenya: this.newUsuari.getRawValue().contrasenya,
      nom: this.newUsuari.getRawValue().nom,
      cognom: this.newUsuari.getRawValue().cognom,
      correu: this.newUsuari.getRawValue().correu,
      imatge: this.newUsuari.getRawValue().imatge,
      lat: this.newUsuari.getRawValue().lat,
      lng: this.newUsuari.getRawValue().lng
    }

    this.#authService.registrar(newUsuari)
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
