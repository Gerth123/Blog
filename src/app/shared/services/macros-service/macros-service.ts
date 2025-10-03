import { Injectable, inject } from '@angular/core';
import {
  Firestore, writeBatch, doc, collection, getDocs, query, limit, serverTimestamp
} from '@angular/fire/firestore';
import { MACROS_SEED, MacroSeed } from '../../models/macro/macros.seed';

@Injectable({ providedIn: 'root' })
export class MacrosService {
  private fs = inject(Firestore);

  /** Schreibt alle Macros (Upsert). */
  async seedAll(macros: MacroSeed[] = MACROS_SEED): Promise<number> {
    const BATCH_LIMIT = 500;
    let written = 0;

    for (let i = 0; i < macros.length; i += BATCH_LIMIT) {
      const chunk = macros.slice(i, i + BATCH_LIMIT);
      const batch = writeBatch(this.fs);

      for (const m of chunk) {
        const ref = doc(this.fs, `macros/${m.id}`);
        batch.set(
          ref,
          {
            ...m,
            updatedAt: serverTimestamp(),
            createdAt: serverTimestamp()
          },
          { merge: true } // Upsert
        );
      }

      await batch.commit();
      written += chunk.length;
    }

    return written;
  }

  /** Führt das Seeding nur aus, wenn die Collection leer ist. */
  async seedIfEmpty(): Promise<boolean> {
    const snap = await getDocs(query(collection(this.fs, 'macros'), limit(1)));
    if (!snap.empty) return false;
    await this.seedAll();
    return true;
  }
}
