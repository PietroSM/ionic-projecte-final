import { Routes } from '@angular/router';
import { logoutActiveGuard } from './shared/guards/logout-active.guard';
import { loginActiveGuard } from './shared/guards/login-active.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate: [loginActiveGuard]
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
];
