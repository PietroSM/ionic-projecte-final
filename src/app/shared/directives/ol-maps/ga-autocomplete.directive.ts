import { Directive, inject, ElementRef, output, afterNextRender, input } from "@angular/core";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";
import { SearchResult } from "src/app/interfaces/search-result";

@Directive({
  selector: 'ga-autocomplete',
  host: {
    'style': `
      z-index: 10;
      display: block;
      margin: 16px auto;
      background: var(--ion-background-color, #fff);
      color: var(--ion-text-color, #000);
      padding: 12px 16px;
      border: 1px solid var(--ion-border-color, #ccc);
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      font-size: 16px;
      position: relative;
      font-size: 1.3rem;
    `
  }
})
export class GaAutocompleteDirective {
  #elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  #autoComplete!: GeocoderAutocomplete;
  locationChange = output<SearchResult>();

  value = input<string>();

  constructor() {
    afterNextRender(() => {
      this.#autoComplete = new GeocoderAutocomplete(
        this.#elementRef.nativeElement,
        "42c7710f83bc41698b841fec7a3b5d2d",
        { 
          lang: "ca" , 
          debounceDelay: 600, 
        }
      );

      if(this.value()){
        this.#autoComplete.setValue(this.value()!);
      }

      this.#autoComplete.on("select", (location) => {
        this.locationChange.emit({
          coordinates: location.geometry.coordinates,
          address: location.properties.formatted
        });
      });
    });
  }

}