import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./componenets/dashboard/dashboard.component')
                .then(c => c.DashboardComponent)
    }
    // Routes enfants éventuelles...
];