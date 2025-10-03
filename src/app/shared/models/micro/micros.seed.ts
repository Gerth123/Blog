import { Micro } from './micro.model';

export const MICROS_SEED: Micro[] = [
  // ======= Mineralstoffe – Mengenelemente =======
  {
    id: 'kalium',
    name: 'Kalium',
    symbol: 'K',
    category: 'Mineralstoff · Mengenelement',
    unit: 'mg',
    desc: 'Elektrolyt, u. a. wichtig für Blutdruck und Nerven-/Muskel-Funktion.',
    rda: { male: 4000, female: 4000, pregnant: 4000, unit: 'mg' },
    sources: [
      'Bananen, Orangen',
      'Kartoffeln, Süßkartoffeln',
      'Spinat, Tomaten',
      'Avocado',
      'Hülsenfrüchte (Linsen, Bohnen)',
      'Nüsse (z. B. Pistazien)',
      'Trockenfrüchte (Aprikosen)'
    ],
  },
  {
    id: 'kalzium',
    name: 'Kalzium',
    symbol: 'Ca',
    category: 'Mineralstoff · Mengenelement',
    unit: 'mg',
    desc: 'Knochen/Zähne, Signalübertragung, Muskelkontraktion.',
    rda: { male: 1000, female: 1000, pregnant: 1200, unit: 'mg' },
    sources: [
      'Milch, Joghurt, Käse',
      'Angereicherte Pflanzendrinks (z. B. Soja)',
      'Grünkohl, Brokkoli',
      'Mandeln, Sesam/Tahini',
      'Tofu (mit Calcium-Sulfat)',
      'Calciumreiches Mineralwasser'
    ],
  },
  {
    id: 'magnesium',
    name: 'Magnesium',
    symbol: 'Mg',
    category: 'Mineralstoff · Mengenelement',
    unit: 'mg',
    desc: 'Kofaktor für viele Enzyme, Muskel- & Nervenfunktion.',
    rda: { male: 350, female: 300, pregnant: 300, unit: 'mg' },
    sources: [
      'Nüsse (Mandeln, Cashews)',
      'Samen/Kerne (Kürbis-, Sonnenblumenkerne)',
      'Vollkorngetreide, Haferflocken',
      'Hülsenfrüchte (Linsen, Bohnen)',
      'Kakao/Dunkle Schokolade',
      'Spinat'
    ],
  },
  {
    id: 'natrium',
    name: 'Natrium',
    symbol: 'Na',
    category: 'Mineralstoff · Mengenelement',
    unit: 'mg',
    desc: 'Elektrolyt/Flüssigkeitshaushalt; Hinweis: Salzzufuhr begrenzen.',
    rda: { male: 1500, female: 1500, pregnant: 1500, unit: 'mg' },
    sources: [
      'Speisesalz, jodiertes Salz',
      'Brot/Backwaren',
      'Käse, Wurstwaren',
      'Fertiggerichte, Snacks',
      'Sojasauce und andere Saucen'
    ],
  },
  {
    id: 'phosphor',
    name: 'Phosphor',
    symbol: 'P',
    category: 'Mineralstoff · Mengenelement',
    unit: 'mg',
    desc: 'Enzymaktivierung, Säure-Basen-Haushalt, Knochen/Zähne.',
    rda: { male: 550, female: 550, pregnant: 550, unit: 'mg' },
    sources: [
      'Fleisch, Geflügel',
      'Fisch',
      'Milchprodukte',
      'Eier',
      'Hülsenfrüchte',
      'Vollkorngetreide, Nüsse'
    ],
  },
  {
    id: 'chlorid',
    name: 'Chlorid',
    symbol: 'Cl',
    category: 'Mineralstoff · Mengenelement',
    unit: 'mg',
    desc: 'Wichtiges Anion im Elektrolythaushalt.',
    notes: 'Im Skript nur als Mengenelement aufgeführt; keine RDA-Seite.',
    sources: [
      'Speisesalz (Natriumchlorid)',
      'Verarbeitete Lebensmittel',
      'Käse, Wurstwaren',
      'Oliven, eingelegtes Gemüse'
    ],
  },
  {
    id: 'schwefel',
    name: 'Schwefel',
    symbol: 'S',
    category: 'Mineralstoff · Mengenelement',
    unit: 'mg',
    desc: 'Bestandteil schwefelhaltiger Aminosäuren.',
    notes: 'Im Skript nur in der Übersicht; keine RDA-Seite.',
    sources: [
      'Eier',
      'Fleisch, Fisch',
      'Hülsenfrüchte',
      'Kreuzblütler (Brokkoli, Kohl)',
      'Zwiebelgewächse (Knoblauch, Zwiebeln)'
    ],
  },

  // ======= Mineralstoffe – Spurenelemente =======
  {
    id: 'eisen',
    name: 'Eisen',
    symbol: 'Fe',
    category: 'Mineralstoff · Spurenelement',
    unit: 'mg',
    desc: 'Sauerstofftransport (Hämoglobin/Myoglobin).',
    notes:
      'RDA-Seite vorhanden, Zahlen im Skript als Tabelle/Grafik – für DB hier bewusst offen gelassen.',
    sources: [
      'Rotes Fleisch, Leber',
      'Geflügel',
      'Fisch/Meeresfrüchte',
      'Hülsenfrüchte (Linsen, Bohnen)',
      'Tofu/Tempeh',
      'Vollkorn, Haferflocken',
      'Kürbiskerne, Sesam'
    ],
  },
  {
    id: 'fluorid',
    name: 'Fluorid',
    symbol: 'F',
    category: 'Mineralstoff · Spurenelement',
    unit: 'mg',
    desc: 'Zahnmineralisation/Kariesprophylaxe.',
    rda: { male: 3.5, female: 3.0, pregnant: 3.0, unit: 'mg' },
    sources: [
      'Fluoridiertes Speisesalz',
      'Tee (Schwarz-/Grüntee)',
      'Fisch, Meeresfrüchte',
      'Mineralwasser mit Fluorid'
    ],
  },
  {
    id: 'jod',
    name: 'Jod',
    symbol: 'I',
    category: 'Mineralstoff · Spurenelement',
    unit: 'µg',
    desc: 'Schilddrüsenhormone, Stoffwechsel.',
    rda: { male: 200, female: 200, pregnant: 230, unit: 'µg' },
    notes: 'Erwachsene: 180–200 µg/Tag – im Skript als Spanne.',
    sources: [
      'Jodiertes Speisesalz',
      'Seefisch (Kabeljau, Seelachs)',
      'Meeresalgen (z. B. Nori – in Maßen)',
      'Milchprodukte, Eier'
    ],
  },
  {
    id: 'selen',
    name: 'Selen',
    symbol: 'Se',
    category: 'Mineralstoff · Spurenelement',
    unit: 'µg',
    desc: 'Antioxidans, Schilddrüsenhormon-Aktivierung, Immunfunktion.',
    rda: { male: 70, female: 60, pregnant: 60, unit: 'µg' },
    sources: [
      'Paranüsse (sehr reich)',
      'Fisch (Thunfisch), Meeresfrüchte',
      'Fleisch, Eier',
      'Vollkorngetreide'
    ],
  },
  {
    id: 'zink',
    name: 'Zink',
    symbol: 'Zn',
    category: 'Mineralstoff · Spurenelement',
    unit: 'mg',
    desc: 'Immunfunktion, Proteinsynthese, Wundheilung.',
    notes:
      'RDA im Skript als Spanne wegen Phytatgehalt: Männer 11–16 mg, Frauen 7–10 mg, Schwangere 7–13 mg.',
    sources: [
      'Rind-/Schweinefleisch, Geflügel',
      'Käse',
      'Meeresfrüchte (z. B. Austern)',
      'Vollkorngetreide',
      'Hülsenfrüchte',
      'Nüsse & Samen (Kürbis-, Sesam)'
    ],
  },
  // (weitere Spurenelemente aus der Übersicht ohne Detailseite:)
  {
    id: 'chrom',
    name: 'Chrom',
    symbol: 'Cr',
    category: 'Mineralstoff · Spurenelement',
    unit: 'µg',
    sources: [
      'Vollkornprodukte',
      'Fleisch',
      'Brokkoli',
      'Gewürze (z. B. Pfeffer)'
    ],
  },
  {
    id: 'kobalt',
    name: 'Kobalt',
    symbol: 'Co',
    category: 'Mineralstoff · Spurenelement',
    unit: 'µg',
    sources: [
      'Innereien (Leber)',
      'Schalentiere',
      'Milchprodukte, Eier'
    ],
  },
  {
    id: 'kupfer',
    name: 'Kupfer',
    symbol: 'Cu',
    category: 'Mineralstoff · Spurenelement',
    unit: 'mg',
    sources: [
      'Leber',
      'Schalentiere',
      'Nüsse (Cashews)',
      'Samen (Sesam)',
      'Kakao, Vollkorn'
    ],
  },
  {
    id: 'mangan',
    name: 'Mangan',
    symbol: 'Mn',
    category: 'Mineralstoff · Spurenelement',
    unit: 'mg',
    sources: [
      'Vollkorngetreide',
      'Nüsse',
      'Tee',
      'Hülsenfrüchte',
      'Spinat'
    ],
  },
  {
    id: 'molybdaen',
    name: 'Molybdän',
    symbol: 'Mo',
    category: 'Mineralstoff · Spurenelement',
    unit: 'µg',
    sources: [
      'Hülsenfrüchte',
      'Getreide',
      'Nüsse'
    ],
  },
  {
    id: 'nickel',
    name: 'Nickel',
    symbol: 'Ni',
    category: 'Mineralstoff · Spurenelement',
    unit: 'µg',
    sources: [
      'Nüsse',
      'Schokolade/Kakao',
      'Hülsenfrüchte',
      'Vollkornprodukte'
    ],
  },
  {
    id: 'silizium',
    name: 'Silizium',
    symbol: 'Si',
    category: 'Mineralstoff · Spurenelement',
    unit: 'mg',
    sources: [
      'Hafer, Gerste (Vollkorn)',
      'Kartoffeln',
      'Bananen',
      'Siliciumreiches Mineralwasser'
    ],
  },
  {
    id: 'vanadium',
    name: 'Vanadium',
    symbol: 'V',
    category: 'Mineralstoff · Spurenelement',
    unit: 'µg',
    sources: [
      'Pilze',
      'Schalentiere',
      'Getreide',
      'Gewürze (z. B. Dill, Pfeffer)'
    ],
  },
  {
    id: 'zinn',
    name: 'Zinn',
    symbol: 'Sn',
    category: 'Mineralstoff · Spurenelement',
    unit: 'mg',
    sources: [
      'Meeresfrüchte',
      'Getreideprodukte',
      'Konservenlebensmittel (Kontakt mit Zinnbeschichtung)'
    ],
  },
  {
    id: 'arsen',
    name: 'Arsen',
    symbol: 'As',
    category: 'Mineralstoff · Spurenelement',
    unit: 'µg',
    notes: 'In der Übersicht geführt, ernährungsphysiologisch umstritten.',
    sources: [
      'Reis/Reisprodukte (anorganisches Arsen)',
      'Meeresfrüchte (organische Arsenverbindungen)'
    ],
  },

  // ======= Vitamine – wasserlöslich =======
  {
    id: 'vitamin-b1',
    name: 'Thiamin (Vitamin B1)',
    symbol: 'B1',
    category: 'Vitamin · wasserlöslich',
    unit: 'mg',
    desc: 'Coenzym im Energiestoffwechsel; Nervensystem.',
    rda: { male: 1.2, female: 1.0, pregnant: 1.3, unit: 'mg' },
    sources: [
      'Vollkorngetreide, Haferflocken',
      'Schweinefleisch',
      'Hülsenfrüchte',
      'Samen & Nüsse'
    ],
  },
  {
    id: 'vitamin-b2',
    name: 'Riboflavin (Vitamin B2)',
    symbol: 'B2',
    category: 'Vitamin · wasserlöslich',
    unit: 'mg',
    desc: 'Bestandteil von Coenzymen; antioxidativ.',
    rda: { male: 1.4, female: 1.1, pregnant: 1.4, unit: 'mg' },
    sources: [
      'Milch, Joghurt, Käse',
      'Eier',
      'Innereien (Leber)',
      'Mandeln',
      'Pilze'
    ],
  },
  {
    id: 'niacin',
    name: 'Niacin (Vitamin B3)',
    symbol: 'B3',
    category: 'Vitamin · wasserlöslich',
    unit: 'mg',
    notes: 'Im Skript aufgeführt; eigene Detailseite nicht vorhanden.',
    sources: [
      'Geflügel, Rind',
      'Fisch (Thunfisch, Lachs)',
      'Erdnüsse',
      'Vollkorngetreide'
    ],
  },
  {
    id: 'pantothensaeure',
    name: 'Pantothensäure (Vitamin B5)',
    symbol: 'B5',
    category: 'Vitamin · wasserlöslich',
    unit: 'mg',
    notes: 'Im Skript aufgeführt; eigene Detailseite nicht vorhanden.',
    sources: [
      'Fleisch, Geflügel',
      'Eier',
      'Vollkorngetreide',
      'Avocado',
      'Pilze'
    ],
  },
  {
    id: 'vitamin-b6',
    name: 'Vitamin B6',
    symbol: 'B6',
    category: 'Vitamin · wasserlöslich',
    unit: 'mg',
    notes: 'Im Skript aufgeführt; eigene Detailseite nicht vorhanden.',
    sources: [
      'Geflügel, Fisch',
      'Kartoffeln',
      'Bananen',
      'Kichererbsen',
      'Vollkorngetreide'
    ],
  },
  {
    id: 'biotin',
    name: 'Biotin (Vitamin B7)',
    symbol: 'B7',
    category: 'Vitamin · wasserlöslich',
    unit: 'µg',
    notes: 'Im Skript aufgeführt; eigene Detailseite nicht vorhanden.',
    sources: [
      'Eier (Eigelb)',
      'Leber',
      'Nüsse & Samen',
      'Lachs',
      'Vollkornprodukte'
    ],
  },
  {
    id: 'folat',
    name: 'Folat (Vitamin B9 / Folsäure)',
    symbol: 'B9',
    category: 'Vitamin · wasserlöslich',
    unit: 'µg',
    desc: 'DNA/RNA-Bildung, Zellteilung, Hämoglobinsynthese.',
    rda: { male: 300, female: 300, pregnant: 550, unit: 'µg' },
    notes: 'Angabe als Folat-Äquivalent im Skript.',
    sources: [
      'Grünes Blattgemüse (Spinat, Feldsalat)',
      'Hülsenfrüchte (Linsen, Bohnen)',
      'Spargel',
      'Zitrusfrüchte',
      'Vollkorngetreide'
    ],
  },
  {
    id: 'vitamin-b12',
    name: 'Vitamin B12',
    symbol: 'B12',
    category: 'Vitamin · wasserlöslich',
    unit: 'µg',
    desc: 'Blutbildung, Nervenfunktion, Eiweißstoffwechsel.',
    rda: { male: 4, female: 4, pregnant: 4.5, unit: 'µg' },
    sources: [
      'Fisch, Fleisch',
      'Milchprodukte',
      'Eier',
      'Angereicherte pflanzliche Produkte (z. B. Drinks)'
    ],
  },
  {
    id: 'vitamin-c',
    name: 'Vitamin C',
    symbol: 'C',
    category: 'Vitamin · wasserlöslich',
    unit: 'mg',
    desc: 'Antioxidans, Immunsystem, viele Stoffwechselfunktionen.',
    rda: { male: 110, female: 95, pregnant: 105, unit: 'mg' },
    sources: [
      'Zitrusfrüchte',
      'Paprika',
      'Brokkoli',
      'Erdbeeren',
      'Kiwi',
      'Schwarze Johannisbeeren'
    ],
  },

  // ======= Vitamine – fettlöslich =======
  {
    id: 'vitamin-a',
    name: 'Vitamin A (Retinol/Retinoläquivalente)',
    symbol: 'A',
    category: 'Vitamin · fettlöslich',
    unit: 'µg RÄ',
    desc: 'Sehvorgang, Haut/Schleimhäute, Antioxidans.',
    rda: { male: 850, female: 700, pregnant: 800, unit: 'µg' },
    notes: 'Skript nennt 800–850 µg (m); 1 µg Retinol = 6 µg Beta-Carotin.',
    sources: [
      'Leber, Lebertran',
      'Eier, Milchprodukte',
      'Karotten, Süßkartoffeln (β-Carotin)',
      'Grünkohl, Spinat (β-Carotin)'
    ],
  },
  {
    id: 'vitamin-d',
    name: 'Vitamin D',
    symbol: 'D',
    category: 'Vitamin · fettlöslich',
    unit: 'IE',
    desc: 'Hormonähnlich: Kalziumhomöostase, Knochen, Immunfunktion.',
    rda: { male: 800, female: 800, pregnant: 4000, unit: 'IE' },
    notes: 'Skript: DGE 800 IE; oft 2000–4000 IE als Zufuhrbereich.',
    sources: [
      'Fettreicher Fisch (Lachs, Hering, Makrele)',
      'Eier (Eigelb)',
      'Pilze (UV-behandelt)',
      'Angereicherte Lebensmittel (z. B. Margarine, Pflanzendrinks)'
    ],
  },
  {
    id: 'vitamin-e',
    name: 'Vitamin E',
    symbol: 'E',
    category: 'Vitamin · fettlöslich',
    unit: 'mg',
    desc: 'Antioxidans, Zellstoffwechsel.',
    rda: { male: 14, female: 11.5, pregnant: 13, unit: 'mg' },
    notes: 'Skript gibt Spannen: Männer 12–15 mg; Frauen 11–12 mg.',
    sources: [
      'Pflanzenöle (Sonnenblumen-, Weizenkeim-, Rapsöl)',
      'Mandeln, Haselnüsse',
      'Samen (Sonnenblumenkerne)',
      'Avocado'
    ],
  },
  {
    id: 'vitamin-k',
    name: 'Vitamin K (K1/K2)',
    symbol: 'K',
    category: 'Vitamin · fettlöslich',
    unit: 'µg',
    desc: 'Blutgerinnung, Knochenstoffwechsel, Proteinbildung.',
    rda: { male: 75, female: 62.5, pregnant: 60, unit: 'µg' },
    notes: 'Skript-Spannen: Männer 70–80 µg; Frauen 60–65 µg.',
    sources: [
      'Grünes Blattgemüse (Grünkohl, Spinat) – Vitamin K1',
      'Kräuter (Petersilie)',
      'Fermentierte Lebensmittel (Natto, einige Käsesorten) – Vitamin K2',
      'Brokkoli'
    ],
  },
];
