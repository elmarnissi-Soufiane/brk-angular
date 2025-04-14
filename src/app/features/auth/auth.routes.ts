// features/auth/auth.routes.ts
import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./componenets/login/login.component')
            .then(m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./componenets/register/register.component')
            .then(m => m.RegisterComponent)
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];