// src/app/features/macros/macro-template/macro-template.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, filter, switchMap } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

import { NutritionService } from '../../../shared/services/nutrition-service/nutrition-service';
import { Macro } from '../../../shared/models/macro/macro.model';

@Component({
  selector: 'app-macro-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './macro-template.component.html',
  styleUrls: ['./macro-template.component.scss'],
})
export class MacroTemplateComponent {
  private route = inject(ActivatedRoute);
  private svc   = inject(NutritionService);

  // Erwartet ein Doc wie { id, name, unit, kcalPerGram, desc, notes, sources[] ... }
  macro = toSignal<Macro | undefined>(
    this.route.paramMap.pipe(
      map(pm => pm.get('id')),
      filter((id): id is string => !!id),
      switchMap(id => this.svc.getMacro(id))
    ),
    { initialValue: undefined }
  );
}
