import { Routes } from '@angular/router';

export const ENTREPOTS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./componenets/entrepot/entrepot.component')
                .then(c => c.EntrepotComponent)
    }
    // Autres routes...
];