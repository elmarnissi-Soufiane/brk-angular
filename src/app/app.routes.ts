import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/componenets/login/login.component';
import { DashboardComponent } from './features/dashboard/componenets/dashboard/dashboard.component';
import { CategorieComponent } from './features/categories/componenets/categorie/categorie.component';
import { CommandeComponent } from './features/commandes/componenets/commande/commande.component';
import { StockComponent } from './features/stocks/componenets/stock/stock.component';
import { EntrepotComponent } from './features/entrepots/componenets/entrepot/entrepot.component';
import { FournisseurComponent } from './features/fournisseurs/componenets/fournisseur/fournisseur.component';
import { ProductComponent } from './features/products/componenets/product/product.component';

export const routes: Routes = [
    // login
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },

    // Dashboard
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

    // Categories
    { path: 'categorie', component: CategorieComponent },
    { path: '', redirectTo: '/categorie', pathMatch: 'full' },

    // Commandes
    { path: 'commande', component: CommandeComponent },
    { path: '', redirectTo: '/commande', pathMatch: 'full' },

    // Stock
    { path: 'stock', component: StockComponent },
    { path: '', redirectTo: '/stock', pathMatch: 'full' },

    // Entrepots
    { path: 'entrepot', component: EntrepotComponent },
    { path: '', redirectTo: '/entrepot', pathMatch: 'full' },

    // Fournisseurs
    { path: 'fournisseur', component: FournisseurComponent },
    { path: '', redirectTo: '/fournisseur', pathMatch: 'full' },

    // Products
    { path: 'product', component: ProductComponent },
    { path: '', redirectTo: '/product', pathMatch: 'full' },
];
