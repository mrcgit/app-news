import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';

import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { newsReducer } from './store/news/news.reducer';
import * as newsEffects from './store/news/news.effects';
import { provideEffects } from '@ngrx/effects';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingInterceptorService } from './loading-interceptor.service';



export const appConfig: ApplicationConfig = {
  providers: [

    importProvidersFrom([BrowserAnimationsModule]),
      provideHttpClient(
        withInterceptorsFromDi()
      ),{
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingInterceptorService,
        multi: true,
    },
      provideRouter(routes), 
      provideStore(),
      provideState({name: 'slice', reducer: newsReducer}),
      provideEffects([newsEffects]),
      provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()})
  ]
};

