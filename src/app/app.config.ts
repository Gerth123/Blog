import { ApplicationConfig, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

// Firebase Core + Firestore
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// Analytics NUR im Browser
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService }
  from '@angular/fire/analytics';

import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimations(),

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),

    // Nur registrieren, wenn im Browser
    ...(environment.enableAnalytics ? [
      provideAnalytics(() => {
        const platformId = inject(PLATFORM_ID);
        if (isPlatformBrowser(platformId)) {
          return getAnalytics();            // greift auf window zu – jetzt safe
        }
        // Server: nichts initialisieren
        return undefined as any;
      }),
      ScreenTrackingService,
      UserTrackingService,
    ] : []),
  ],
};
