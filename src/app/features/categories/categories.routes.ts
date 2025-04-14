import { Routes } from '@angular/router';

export const CATEGORIES_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./componenets/categorie/categorie.component')
            .then(m => m.CategorieComponent)
    },
    // {
    //     path: '',
    //     loadComponent: () => import('./components/categorie-list/categorie-list.component')
    //         .then(m => m.CategorieListComponent),
    //     title: 'Liste des catégories'
    // },
    // {
    //     path: 'ajouter',
    //     loadComponent: () => import('./components/categorie-form/categorie-form.component')
    //         .then(m => m.CategorieFormComponent),
    //     title: 'Ajouter une catégorie'
    // },
    // {
    //     path: 'editer/:id',
    //     loadComponent: () => import('./components/categorie-form/categorie-form.component')
    //         .then(m => m.CategorieFormComponent),
    //     title: 'Éditer une catégorie'
    // },
    // {
    //     path: ':id',
    //     loadComponent: () => import('./components/categorie-details/categorie-details.component')
    //         .then(m => m.CategorieDetailsComponent),
    //     title: 'Détails de la catégorie'
    // }
];

// import { Routes } from '@angular/router';
// import { CategorieComponent } from './componenets/categorie/categorie.component';

// export const CATEGORIES_ROUTES: Routes = [
//     { path: '', component: CategorieComponent }
//     // Autres routes liées aux catégories
// ];