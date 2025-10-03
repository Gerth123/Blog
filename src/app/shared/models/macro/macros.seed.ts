// src/app/shared/models/macro/macros.seed.ts
import { Macro } from './macro.model';

export type MacroSeed = Partial<Macro> & { id: string; name: string };

export const MACROS_SEED: MacroSeed[] = [
  {
    id: 'protein',
    name: 'Protein',
    unit: 'g',
    desc: 'Essentielle Aminosäuren; Muskelerhalt/-aufbau.',
    kcalPerGram: 4,
    notes: 'Praxis: ~1.6–2.2 g/kg/Tag je nach Ziel.',
    sources: [
      'Magerquark, Skyr, Hüttenkäse',
      'Eier',
      'Hähnchen-/Putenbrust, Rind',
      'Lachs, Thunfisch, Garnelen',
      'Linsen, Kichererbsen, Bohnen',
      'Tofu, Tempeh, Sojajoghurt',
      'Molken-/Caseinprotein (Whey/Casein)'
    ]
  },
  {
    id: 'kohlenhydrate',
    name: 'Kohlenhydrate',
    unit: 'g',
    desc: 'Primäre Energiequelle; füllt Glykogenspeicher.',
    kcalPerGram: 4,
    notes: 'Bedarf trainings-/zieleabhängig.',
    sources: [
      'Reis, Pasta, Couscous',
      'Kartoffeln, Süßkartoffeln',
      'Haferflocken, Brot, Vollkorngetreide',
      'Banane, Beeren, Obst',
      'Hülsenfrüchte (Linsen, Bohnen, Kichererbsen)',
      'Mais, Erbsen'
    ]
  },
  {
    id: 'fett',
    name: 'Fett',
    unit: 'g',
    desc: 'Energie, fettlösliche Vitamine, Hormonsynthese.',
    kcalPerGram: 9,
    notes: 'Untergrenze oft ~0.6–0.8 g/kg/Tag.',
    sources: [
      'Olivenöl, Rapsöl',
      'Nüsse (Walnuss, Mandel, Haselnuss)',
      'Samen/Kerne (Leinsamen, Chia, Sonnenblumenkerne)',
      'Avocado',
      'Fettreicher Fisch (Lachs, Makrele, Hering)',
      'Eier, Käse'
    ]
  },
  {
    id: 'ballaststoffe',
    name: 'Ballaststoffe',
    unit: 'g',
    desc: 'Sättigung, Darmgesundheit, Blutzuckerregulation.',
    kcalPerGram: 2,
    notes: 'Zielbereich häufig 25–40 g/Tag.',
    sources: [
      'Vollkornprodukte (Vollkornbrot, Haferflocken)',
      'Hülsenfrüchte (Linsen, Bohnen, Kichererbsen)',
      'Gemüse (Brokkoli, Karotten, Paprika)',
      'Obst (Beeren, Äpfel, Birnen)',
      'Nüsse & Samen (Leinsamen, Chia)'
    ]
  },
  {
    id: 'alkohol',
    name: 'Alkohol',
    unit: 'g',
    desc: 'Liefert Energie, keine essentiellen Nährstoffe.',
    kcalPerGram: 7,
    sources: [
      'Bier',
      'Wein, Sekt',
      'Spirituosen (z. B. Wodka, Rum, Whisky)',
      'Liköre'
    ]
  },
  {
    id: 'wasser',
    name: 'Wasser',
    unit: 'ml',
    desc: 'Hydration, Transportmedium, Thermoregulation.',
    kcalPerGram: 0,
    notes: '1 ml ≈ 1 g; Bedarf stark variabel.',
    sources: [
      'Wasser (still/sprudel)',
      'Ungesüßter Tee, Kaffee (ohne Zucker/Milchzusatz)',
      'Gemüse mit hohem Wasseranteil (Gurke, Tomate, Zucchini)',
      'Obst mit hohem Wasseranteil (Wassermelone, Orange)'
    ]
  }
];
