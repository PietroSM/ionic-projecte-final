import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, EMPTY, map } from 'rxjs';
import { Usuari } from 'src/app/interfaces/usuari';
import { PerfilService } from 'src/app/services/perfil.service';

export const perfilResolver: ResolveFn<Usuari> = (route) => {
  const perfilService = inject(PerfilService);

  if(route.url[0].path != "me") {
    return perfilService.getPerfil(route.url[1].path)
      .pipe(
        catchError((error) => {
          console.log(error.error.error);
          return EMPTY;
        })
      )
  } else {
    return perfilService.getPerfil()
      .pipe(
        catchError((error) => {
          console.log(error);
          return EMPTY;
        })
      )
  }
};
