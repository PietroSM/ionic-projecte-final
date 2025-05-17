import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet, Platform } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  camera,
  images,
  homeOutline,
  chatbubblesOutline,
  addCircleOutline,
  basketOutline,
  personCircleOutline,
  carOutline,
  peopleOutline,
  flowerOutline,
  sunnyOutline,
  snowOutline,
  leafOutline,
  helpOutline,
  trashOutline,
  createOutline,
  personAddOutline,
  close,
  readerOutline,
  logoEuro,
  logOutOutline,
  cubeOutline,
  alertCircleOutline,
  batteryDeadOutline,
  airplaneOutline,
  bagCheckOutline,
  storefrontOutline,
  menuOutline,
  earthOutline,
} from 'ionicons/icons';
import { SplashScreen } from '@capacitor/splash-screen';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  #platform = inject(Platform);


  constructor() {
    addIcons({
      camera,
      images,
      homeOutline,
      chatbubblesOutline,
      addCircleOutline,
      basketOutline,
      personCircleOutline,
      carOutline,
      peopleOutline,
      flowerOutline,
      sunnyOutline,
      snowOutline,
      leafOutline,
      helpOutline,
      trashOutline,
      createOutline,
      personAddOutline,
      close,
      readerOutline,
      logoEuro,
      logOutOutline,
      cubeOutline,
      alertCircleOutline,
      batteryDeadOutline,
      airplaneOutline,
      bagCheckOutline,
      storefrontOutline, 
      menuOutline,
      earthOutline
    });
  }



    async initializeApp() {
    if (this.#platform.is('capacitor')) {
      await this.#platform.ready();
      SplashScreen.hide();
    }

  }
}
