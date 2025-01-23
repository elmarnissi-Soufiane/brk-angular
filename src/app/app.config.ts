import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';

import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    HttpClientModule,
    provideHttpClient(withFetch()),
    provideStore({
      // catalogueState: productReducers, // appel du fonction de reducers continet tous les actions qui on utiliser sur store pour recupere donnes
    }),
    provideEffects(),  // provideEffects([ProdcutsEffects]), // en mettre la calass Injectable d'effect
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      connectInZone: true,
    }), provideAnimationsAsync(),
  ]
};
