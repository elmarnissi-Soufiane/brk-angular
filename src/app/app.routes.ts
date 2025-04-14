import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/componenets/login/login.component';
import { RegisterComponent } from './features/auth/componenets/register/register.component';

export const routes: Routes = [

    // login
    // { path: 'login', component: LoginComponent },
    // { path: '', redirectTo: '/login', pathMatch: 'full' },

    // // Register
    // { path: 'register', component: RegisterComponent },
    // // { path: '', redirectTo: '/register', pathMatch: 'full' },

    // // Dashboard
    // { path: 'dashboard', component: DashboardComponent },
    // // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

    // // Categories
    // { path: 'categorie', component: CategorieComponent },
    // // { path: '', redirectTo: '/categorie', pathMatch: 'full' },

    // // Commandes
    // { path: 'commande', component: CommandeComponent },
    // // { path: '', redirectTo: '/commande', pathMatch: 'full' },

    // // Stock
    // { path: 'stock', component: StockComponent },
    // // { path: '', redirectTo: '/stock', pathMatch: 'full' },

    // // Entrepots
    // { path: 'entrepot', component: EntrepotComponent },
    // // { path: '', redirectTo: '/entrepot', pathMatch: 'full' },

    // // Fournisseurs
    // { path: 'fournisseur', component: FournisseurComponent },
    // // { path: '', redirectTo: '/fournisseur', pathMatch: 'full' },

    // // Products
    // { path: 'product', component: ProductComponent },
    // // { path: '', redirectTo: '/product', pathMatch: 'full' },

    // Auth - lazy loaded as a feature group
    {
        path: '',
        loadChildren: () => import('./features/auth/auth.routes')
            .then(m => m.AUTH_ROUTES)
    },

    // // Dashboard - lazy loaded
    // {
    //     path: 'dashboard',
    //     loadComponent: () => import('./features/dashboard/componenets/dashboard/dashboard.component')
    //         .then(m => m.DashboardComponent)
    // },

    // // Categories - lazy loaded
    // {
    //     path: 'categorie',
    //     loadComponent: () => import('./features/categories/componenets/categorie/categorie.component')
    //         .then(m => m.CategorieComponent)
    // },

    // // Commandes - lazy loaded
    // {
    //     path: 'commande',
    //     loadComponent: () => import('./features/commandes/componenets/commande/commande.component')
    //         .then(m => m.CommandeComponent)
    // },

    // // Stock - lazy loaded
    // {
    //     path: 'stock',
    //     loadComponent: () => import('./features/stocks/componenets/stock/stock.component')
    //         .then(m => m.StockComponent)
    // },

    // // Entrepots - lazy loaded
    // {
    //     path: 'entrepot',
    //     loadComponent: () => import('./features/entrepots/componenets/entrepot/entrepot.component')
    //         .then(m => m.EntrepotComponent)
    // },

    // // Fournisseurs - lazy loaded
    // {
    //     path: 'fournisseur',
    //     loadComponent: () => import('./features/fournisseurs/componenets/fournisseur/fournisseur.component')
    //         .then(m => m.FournisseurComponent)
    // },

    // // Products - lazy loaded
    // {
    //     path: 'product',
    //     loadComponent: () => import('./features/products/componenets/product/product.component')
    //         .then(m => m.ProductComponent)
    // }

    // Dashboard - lazy loaded
    {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.routes')
            .then(m => m.DASHBOARD_ROUTES)
    },

    // Categories - lazy loaded
    {
        path: 'categorie',
        loadChildren: () => import('./features/categories/categories.routes')
            .then(m => m.CATEGORIES_ROUTES)
    },

    // Commandes - lazy loaded
    {
        path: 'commande',
        loadChildren: () => import('./features/commandes/commandes.routes')
            .then(m => m.COMMANDES_ROUTES)
    },

    // Stock - lazy loaded
    {
        path: 'stock',
        loadChildren: () => import('./features/stocks/stocks.routes')
            .then(m => m.STOCKS_ROUTES)
    },

    // Entrepots - lazy loaded
    {
        path: 'entrepot',
        loadChildren: () => import('./features/entrepots/entrepots.routes')
            .then(m => m.ENTREPOTS_ROUTES)
    },

    // Fournisseurs - lazy loaded
    {
        path: 'fournisseur',
        loadChildren: () => import('./features/fournisseurs/fournisseurs.routes')
            .then(m => m.FOURNISSEURS_ROUTES)
    },

    // Products - lazy loaded
    {
        path: 'product',
        loadChildren: () => import('./features/products/products.routes')
            .then(m => m.PRODUCTS_ROUTES)
    }

];
