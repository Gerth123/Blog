import { Injectable, inject } from '@angular/core';
import {
  Firestore, writeBatch, doc, collection, getDocs, query, limit, serverTimestamp
} from '@angular/fire/firestore';
import { MICROS_SEED } from '../../models/micro/micros.seed';
import { Micro } from '../../models/micro/micro.model';

@Injectable({ providedIn: 'root' })
export class MicrosService {
  private fs = inject(Firestore);

  /** Schreibt alle Micros (upsert). Gibt die Anzahl geschriebener Docs zurück. */
  async seedAll(micros: Micro[] = MICROS_SEED): Promise<number> {
    const BATCH_LIMIT = 500; // Firestore-Limit
    let written = 0;

    for (let i = 0; i < micros.length; i += BATCH_LIMIT) {
      const chunk = micros.slice(i, i + BATCH_LIMIT);
      const batch = writeBatch(this.fs);

      for (const m of chunk) {
        const ref = doc(this.fs, `micros/${m.id}`);
        batch.set(
          ref,
          {
            ...m,
            updatedAt: serverTimestamp(),
            // setze createdAt nur, wenn das Doc neu ist (merge bleibt true)
            createdAt: serverTimestamp(),
          },
          { merge: true } // Upsert: überschreibt nur die angegebenen Felder
        );
      }

      await batch.commit();
      written += chunk.length;
    }

    return written;
  }

  /** Führt das Seeding nur aus, wenn die Collection leer ist. */
  async seedIfEmpty(): Promise<boolean> {
    const snap = await getDocs(query(collection(this.fs, 'micros'), limit(1)));
    if (!snap.empty) return false;
    await this.seedAll();
    return true;
  }
}
