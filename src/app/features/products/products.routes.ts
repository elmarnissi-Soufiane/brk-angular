import { Routes } from '@angular/router';

export const PRODUCTS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./componenets/product/product.component')
                .then(c => c.ProductComponent)
    }
    // Autres routes...
];