import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { Producte } from 'src/app/interfaces/producte';
import { ProducteService } from 'src/app/services/producte.service';

export const productesResolver: ResolveFn<Producte> = (route) => {
  const producteService = inject(ProducteService);

  return producteService.getProducte(route.url[1].path)
    .pipe(
      catchError((error) => {
        console.log(error.error.error);
        return EMPTY;
      })
    );
};
