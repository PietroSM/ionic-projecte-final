import { Routes } from "@angular/router";
import { perfilResolver } from "../shared/resolvers/perfil.resolver";


export const perfilRoutes: Routes = [
    {
        path: 'edit',
        loadComponent: () =>
            import('./perfil-form/perfil-form.page')
            .then((m) => m.PerfilFormPage),
    },
    {
        path: 'me',
        resolve: {
            usuari: perfilResolver
        },
        loadComponent: () =>
            import('./perfil-page/perfil-page.page')
            .then((m) => m.PerfilPagePage),
    },
    {
        path: ':id',
        resolve: {
            usuari: perfilResolver
        },
        loadComponent: () =>
            import('./perfil-page/perfil-page.page')
            .then((m) => m.PerfilPagePage),
    },
]