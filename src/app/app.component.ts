import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NotificationLabelComponent } from './shared/components/notification-label/notification-label.component';
import { MicrosService } from './shared/services/micros-service/micros-service';
import { MacrosService } from './shared/services/macros-service/macros-service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NotificationLabelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'blog';

  private micros = inject(MicrosService);
  private macros = inject(MacrosService);
  private platformId = inject(PLATFORM_ID);

  async ngOnInit() {
    //   // Nur im Browser + nur im Dev-Build seeden
    //   if (isPlatformBrowser(this.platformId) && !environment.production) {
    //     try {
    //       const seeded = await this.micros.seedIfEmpty(); // oder: await this.micros.seedAll();
    //       console.log(seeded ? 'Micros seeded.' : 'Micros existieren bereits.');
    //     } catch (err) {
    //       console.error('Seeding Micros fehlgeschlagen:', err);
    //     }
    //   }
    if (isPlatformBrowser(this.platformId) && !environment.production) {
      try {
        const microSeeded = await this.micros.seedIfEmpty();
        const macroSeeded = await this.macros.seedIfEmpty();
        console.log(
          `Seed: micros=${microSeeded ? 'done' : 'exists'}, macros=${
            macroSeeded ? 'done' : 'exists'
          }`
        );
      } catch (e) {
        console.error('Seeding fehlgeschlagen:', e);
      }
    }
  }
}
