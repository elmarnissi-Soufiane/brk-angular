import { Routes } from '@angular/router';

export const FOURNISSEURS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./componenets/fournisseur/fournisseur.component')
                .then(c => c.FournisseurComponent)
    }
    // Autres routes...
];