import { Routes } from "@angular/router";
import { loginActiveGuard } from "../shared/guards/login-active.guard";

export const homeTabRoutes: Routes = [
    {
        path: 'afegir',
        loadComponent: () =>
            import('./afegir-producte/afegir-producte.page')
            .then((m) => m.AfegirProductePage),
        canActivate: [loginActiveGuard]
    }
]