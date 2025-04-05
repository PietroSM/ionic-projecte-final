import { Routes } from '@angular/router';
import { logoutActiveGuard } from './shared/guards/logout-active.guard';
import { loginActiveGuard } from './shared/guards/login-active.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => 
      import('./home/home.page')
      .then((m) => m.HomePage),
    canActivate: [loginActiveGuard],
    loadChildren: () =>
      import('./home/homeTab.routes')
      .then((m) => m.homeTabRoutes),
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => 
      import('./auth/auth.routes').then((m) => m.authRoutes),
    canActivate: [logoutActiveGuard]
  },
  {
    path: 'producte-card',
    loadComponent: () => 
      import('./producte/producte-card/producte-card.page')
      .then( m => m.ProducteCardPage)
  },
  {
    path: 'producte/:id',
    loadComponent: () => 
      import('./producte/detalls-producte/detalls-producte.page')
      .then( m => m.DetallsProductePage)
  },
  {
    path: 'modal-afegir-producte',
    loadComponent: () => import('./producte/modal-afegir-producte/modal-afegir-producte.page').then( m => m.ModalAfegirProductePage)
  },
];
