import { Routes } from "@angular/router";
import { loginActiveGuard } from "../shared/guards/login-active.guard";

export const homeTabRoutes: Routes = [
    {
        path: 'inici',
        loadComponent: () =>
            import('./inici-producte/inici-producte.page')
            .then((m) => m.IniciProductePage),
        canActivate: [loginActiveGuard]
    },
    {
        path: 'xat',
        loadComponent: () =>
            import('./xat-page/xat-page.page')
            .then((m) => m.XatPagePage),
        canActivate: [loginActiveGuard]
    },
    {
        path: 'afegir',
        loadComponent: () =>
            import('./afegir-producte/afegir-producte.page')
            .then((m) => m.AfegirProductePage),
        canActivate: [loginActiveGuard]
    },
    {
        path: 'cistella',
        loadComponent: () =>
            import('./cistella-page/cistella-page.page')
            .then((m) => m.CistellaPagePage),
        canActivate: [loginActiveGuard]

    },
    {
        path: 'perfil',
        loadComponent: () =>
            import('./profile-options/profile-options.page')
            .then((m) => m.ProfileOptionsPage),
        canActivate: [loginActiveGuard]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inici',
    },
]