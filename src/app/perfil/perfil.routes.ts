import { Routes } from "@angular/router";
import { perfilResolver } from "../shared/resolvers/perfil.resolver";


export const perfilRoutes: Routes = [
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
    }
]