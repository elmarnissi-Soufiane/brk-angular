import { ServiceappService } from './services/serviceapp.service';
import { APP_INITIALIZER, ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';

import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore, Store } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { rootReducer } from './store/app.reducers';
import { AppEffects } from './store/app.effects';
import { fetchInitialData } from './store/app.actions';
import { authReducer } from './features/auth/state/auth.reducers';
import { AuthEffects } from './features/auth/state/auth.effects';
import { ChartsEffects } from './features/dashboard/state/courtier.effects';
import { chartsReducer } from './features/dashboard/state/courtier.reducers';
import { fournisseurReducer } from './features/fournisseurs/state/fournisseur.reducers';
import { FournisseurEffects } from './features/fournisseurs/state/fournisseur.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    HttpClientModule,
    provideHttpClient(withFetch()),
    provideStore({
      appState: rootReducer, // Add your store's reducer here
      auth: authReducer,
      charts: chartsReducer,
      fournisseurs: fournisseurReducer

    }),
    provideEffects([AppEffects, AuthEffects, ChartsEffects, FournisseurEffects]), // Register your NgRx effects
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      connectInZone: true,
    }), provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: (apiCheckService: ServiceappService, store: Store) => () =>
        apiCheckService.checkAllEndpoints().subscribe((results) => {
          if (results) {  // Check if results is defined
            console.log('Vérification des points de terminaison:', results);  // Log the results
            results.forEach(({ endpoint, isEmpty }) => {
              if (isEmpty) {
                console.log(`Endpoint ${endpoint} est vide. Action de récupération déclenchée.`);
                store.dispatch(fetchInitialData({ endpoint }));
              }
            });
          } else {
            console.error('Aucun résultat reçu.');
          }
        }),
      deps: [ServiceappService, Store],
      multi: true,
    },
  ]
};
