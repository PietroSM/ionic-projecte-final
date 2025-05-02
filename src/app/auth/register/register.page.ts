import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent,ToastController, IonHeader,IonTitle, IonToolbar, NavController, IonList, IonItem, IonInput, IonLabel, IonButton, IonIcon, IonImg, IonGrid, IonRow, IonCol, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthService } from 'src/app/services/auth.service';
import { Usuari } from 'src/app/interfaces/usuari';
import { SearchResult } from 'src/app/interfaces/search-result';
import { GaAutocompleteDirective } from "../../shared/directives/ol-maps/ga-autocomplete.directive";
 

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
<<<<<<< HEAD
  imports: [IonCardContent, IonCard, IonBackButton, IonButtons, IonCol, IonRow, IonImg, IonIcon, IonButton, IonInput, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, GaAutocompleteDirective]
=======
  imports: [IonBackButton, IonButtons, IonCol, IonRow, IonGrid, IonImg, IonIcon, IonButton, IonLabel, IonInput, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, GaAutocompleteDirective]
>>>>>>> 960948de18993d5b1e9772774debb9ecd4dea43f
})
export class RegisterPage  {

  #fb = inject(NonNullableFormBuilder);
  #nav = inject(NavController);
<<<<<<< HEAD
  #changeDetector = inject(ChangeDetectorRef);
  #toastCtrl = inject(ToastController);
  #authService = inject(AuthService);
  
=======
>>>>>>> 960948de18993d5b1e9772774debb9ecd4dea43f
  address = signal<string>("");



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
    
    this.newUsuari.get('lat')?.setValue(coordinates.coords.longitude);
    this.newUsuari.get('lng')?.setValue(coordinates.coords.latitude);
  }


  changePlace(result: SearchResult) {
<<<<<<< HEAD
=======
    // console.log(result.coordinates);
>>>>>>> 960948de18993d5b1e9772774debb9ecd4dea43f
    this.newUsuari.get('lat')?.setValue(result.coordinates[0]);
    this.newUsuari.get('lng')?.setValue(result.coordinates[1]);
    this.address.set(result.address);
  }


  async pickFromGallery() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Photos,
      height: 100,
      width: 100,
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
      height: 100,
      width: 100,
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
      lng: this.newUsuari.getRawValue().lng,
      adresa: this.address(),
    }

    this.#authService.registrar(newUsuari)
      .subscribe({
        next: async () => {
          (await this.#toastCtrl.create({
            duration: 3000,
            position: 'bottom',
            message: 'Usuari registrat corractament!'
          })).present();
          this.#nav.navigateRoot(['/auth/login']);
        },
        error: async (error) => {
          (await this.#toastCtrl.create({
            duration: 3000,
            header: 'Error Registre',
            position: 'middle',
            message: Object.values(error.error.errors).join('\n'),
          })).present();
          console.log(error.error.errors);
        }

      });
  }

}
