import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent,ToastController,NavController, IonHeader, IonTitle, IonToolbar, IonImg, IonInput , IonButtons, IonBackButton, IonCard, IonCol, IonRow, IonCardContent, IonList, IonItem, IonButton, IonGrid } from '@ionic/angular/standalone';
import { rxResource } from '@angular/core/rxjs-interop';
import { PerfilService } from 'src/app/services/perfil.service';
import { GaAutocompleteDirective } from 'src/app/shared/directives/ol-maps/ga-autocomplete.directive';
import { SearchResult } from 'src/app/interfaces/search-result';
import { UpdateUsuari } from 'src/app/interfaces/usuari';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.page.html',
  styleUrls: ['./perfil-form.page.scss'],
  standalone: true,
  imports: [IonGrid, IonButton, IonBackButton, IonCard, IonCardContent, IonButtons, IonRow, IonCol, IonImg, IonInput, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, GaAutocompleteDirective]
})

export class PerfilFormPage{

  #perfilService = inject(PerfilService);
  #fb = inject(NonNullableFormBuilder);
  #toastCtrl = inject(ToastController);
  #nav = inject(NavController);

  address = signal<string>("");
  
  perfilResource = rxResource({
    loader: () => this.#perfilService.getPerfil()
  });


  usuari = computed(() => this.perfilResource.value());
  
  
  editUsuari = this.#fb.group({
    nom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    cognom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    correu: ['', [Validators.required, Validators.email]],
    lat: [0],
    lng: [0]
  });



  constructor() { 
    effect(() => {
      if(this.usuari()){
        console.log(this.usuari());
        this.editUsuari.get('nom')?.setValue(this.usuari()!.nom);
        this.editUsuari.get('cognom')?.setValue(this.usuari()!.cognom);
        this.editUsuari.get('correu')?.setValue(this.usuari()!.correu);
        this.editUsuari.get('lat')?.setValue(this.usuari()!.lat);
        this.editUsuari.get('lng')?.setValue(this.usuari()!.lng);
        this.address.set(this.usuari()?.adresa!);


      }
    });

  }


  changePlace(result: SearchResult) {
    this.editUsuari.get('lat')?.setValue(result.coordinates[0]);
    this.editUsuari.get('lng')?.setValue(result.coordinates[1]);
    this.address.set(result.address);
  }




  editarPerfil() {

    const editPerfil: UpdateUsuari = {
      nom: this.editUsuari.getRawValue().nom,
      cognom: this.editUsuari.getRawValue().cognom,
      correu: this.editUsuari.getRawValue().correu,
      lat: this.editUsuari.getRawValue().lat,
      lng: this.editUsuari.getRawValue().lng,
      adresa: this.address()
    };


    this.#perfilService.putPerfil(editPerfil, this.usuari()!.id!)
      .subscribe({
        next: async () => {
          (await this.#toastCtrl.create({
            duration: 3000,
            position: 'bottom',
            message: 'Perfil Editat corractament!'
          })).present();
          this.#nav.navigateRoot(['perfil/me']);
        },
        error: async (error) => {
          (await this.#toastCtrl.create({
            duration: 3000,
            header: 'Error Editar Perfil',
            position: 'middle',
            message: Object.values(error.error.errors).join('\n'),
          })).present();
        }
      });

  }


}
