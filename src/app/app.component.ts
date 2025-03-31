import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
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
  personAddOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
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
      personAddOutline
    });
  }
}
