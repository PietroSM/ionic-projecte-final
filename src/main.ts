// import { bootstrapApplication } from '@angular/platform-browser';
// import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules, withComponentInputBinding } from '@angular/router';
// import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

// import { routes } from './app/app.routes';
// import { AppComponent } from './app/app.component';
// import { provideExperimentalZonelessChangeDetection } from '@angular/core';
// import { provideHttpClient, withInterceptors } from '@angular/common/http';
// import { baseUrlInterceptor } from './app/shared/interceptors/base-url.interceptor';
// import { authInterceptor } from './app/shared/interceptors/auth.interceptor';




// bootstrapApplication(AppComponent, {
//   providers: [
//     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
//     provideIonicAngular(),
//     provideExperimentalZonelessChangeDetection(),
//     provideRouter(routes, withPreloading(PreloadAllModules), withComponentInputBinding()),
//     provideHttpClient(withInterceptors([baseUrlInterceptor, authInterceptor])),
//   ],
// });

import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
  withComponentInputBinding
} from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideExperimentalZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { baseUrlInterceptor } from './app/shared/interceptors/base-url.interceptor';
import { authInterceptor } from './app/shared/interceptors/auth.interceptor';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const socketConfig: SocketIoConfig = {
  url: 'http://localhost:8080',
  options: {
    transports: ['websocket']
  }
};

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withPreloading(PreloadAllModules), withComponentInputBinding()),
    provideHttpClient(withInterceptors([baseUrlInterceptor, authInterceptor])),
    importProvidersFrom(SocketIoModule.forRoot(socketConfig))
  ],
});
