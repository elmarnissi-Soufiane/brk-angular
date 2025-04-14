import { Routes } from '@angular/router';

export const COMMANDES_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./componenets/commande/commande.component')
                .then(c => c.CommandeComponent) // Chargement lazy du composant standalone
    }
    // Autres routes si nécessaire
];