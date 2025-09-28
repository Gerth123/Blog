// src/app/shared/services/nutrition.service.ts
import { Injectable, inject } from '@angular/core';
import {
  Firestore, doc, docData, collection, collectionData, query, orderBy
} from '@angular/fire/firestore';
import { Observable, shareReplay } from 'rxjs';

export interface Micro {
  id: string;
  name: string;
  symbol?: string;         
  category?: string;       
  unit?: string;           
  desc?: string;
  notes?: string;
  functions?: string[];
  sources?: string[];
  rda?: { female?: number; male?: number; pregnant?: number; unit?: string };
  supply?: { de?: 'niedrig' | 'mittel' | 'gut' };
  riskGroups?: string[];
}

export interface Macro {
  id: string;
  name: string;
  unit?: string;
  desc?: string;
  sources?: string[];
}

@Injectable({ providedIn: 'root' })
export class NutritionService {
  private fs = inject(Firestore);

  /** Detail: Mikro per ID (Dokument-ID = dein :id/Slug) */
  getMicro(id: string): Observable<Micro | undefined> {
    const ref = doc(this.fs, `micros/${id}`);
    return docData(ref, { idField: 'id' }) as Observable<Micro | undefined>;
  }

  /** Detail: Makro per ID */
  getMacro(id: string): Observable<Macro | undefined> {
    const ref = doc(this.fs, `macros/${id}`);
    return docData(ref, { idField: 'id' }) as Observable<Macro | undefined>;
  }

  /** Liste: alle Mikros (z. B. für /micros) */
  private _micros$?: Observable<Micro[]>;
  listMicros(): Observable<Micro[]> {
    if (!this._micros$) {
      const col = collection(this.fs, 'micros');
      const q = query(col, orderBy('name'));
      this._micros$ = (collectionData(q, { idField: 'id' }) as Observable<Micro[]>).pipe(
        shareReplay(1)
      );
    }
    return this._micros$;
  }

  /** Liste: alle Makros (z. B. für /macros) */
  private _macros$?: Observable<Macro[]>;
  listMacros(): Observable<Macro[]> {
    if (!this._macros$) {
      const col = collection(this.fs, 'macros');
      const q = query(col, orderBy('name'));
      this._macros$ = (collectionData(q, { idField: 'id' }) as Observable<Macro[]>).pipe(
        shareReplay(1)
      );
    }
    return this._macros$;
  }
}
