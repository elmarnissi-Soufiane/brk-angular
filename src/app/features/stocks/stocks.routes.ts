import { Routes } from '@angular/router';

export const STOCKS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./componenets/stock/stock.component')
                .then(c => c.StockComponent)
    }
    // Autres routes...
];