import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, filter, switchMap } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

import { NutritionService } from '../../../shared/services/nutrition-service/nutrition-service';
import { Micro } from '../../../shared/models/micro/micro.model';

@Component({
  selector: 'app-micro-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './micro-template.component.html',
  styleUrls: ['./micro-template.component.scss'],
})
export class MicroTemplateComponent {
  private route = inject(ActivatedRoute);
  private svc   = inject(NutritionService);

  // Erwartet ein Doc wie { name, symbol, category, desc, notes, functions[], sources[], rda:{male,female,unit}, supply:{de}, riskGroups[] }
 micro = toSignal<Micro | undefined>(
  this.route.paramMap.pipe(
    map(pm => pm.get('id')),
    filter((id): id is string => !!id),
    switchMap(id => this.svc.getMicro(id))
  ),
  { initialValue: undefined }
);
}
