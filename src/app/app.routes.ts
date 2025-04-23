import { Routes } from '@angular/router';
import { logoutActiveGuard } from './shared/guards/logout-active.guard';
import { loginActiveGuard } from './shared/guards/login-active.guard';
import { comandesResolver } from './shared/resolvers/comandes.resolver';

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
  {
    path: 'comandes',
    loadComponent: () => import('./comanda/comandes/comandes.page').then( m => m.ComandesPage),
    canActivate: [loginActiveGuard],
    resolve: {
      comandes : comandesResolver
    }
  },
  {
    path: 'vendes',
    loadComponent: 
      () => import('./comanda/comandes/comandes.page')
      .then( m => m.ComandesPage),
    canActivate: [loginActiveGuard],
    resolve: {
      comandes : comandesResolver
    }
  },
  {
    path: 'comanda-card',
    loadComponent: () => import('./comanda/comanda-card/comanda-card.page').then( m => m.ComandaCardPage)
  },
  {
    path: 'comandes/:id',
    loadComponent: () => import('./comanda/comanda-status-page/comanda-status-page.page').then( m => m.ComandaStatusPagePage),
    canActivate: [loginActiveGuard]
  },
  {
    path: 'productes-venda',
    loadComponent:
      () => import('./producte/productes-propis/productes-propis.page')
      .then(m => m.ProductesPropisPage),
      canActivate: [loginActiveGuard]
  },
  {
    path: 'comanda-status-page',
    loadComponent: () => import('./comanda/comanda-status-page/comanda-status-page.page').then( m => m.ComandaStatusPagePage)
  },
  {
    path: 'productes-propis',
    loadComponent: () => import('./producte/productes-propis/productes-propis.page').then( m => m.ProductesPropisPage)
  },
  {
    path: 'xat/:id',
    loadComponent: () => import('./xat/xat-detail/xat-detail.page').then( m => m.XatDetailPage)
  },
];
