import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { Comanda } from 'src/app/interfaces/comanda';
import { ComandaService } from 'src/app/services/comanda.service';

export const comandesResolver: ResolveFn<Comanda[]> = (route, state) => {
  const comandaService = inject(ComandaService);

  if(state.url.endsWith('/vendes')) {
    return comandaService.getComandesVendes()
      .pipe(
        catchError(() => {
          return EMPTY;
        })
      );
  } else {
    return comandaService.getComandes()
      .pipe(
        catchError(() => {
          return EMPTY;
        })
      );
  }
};
