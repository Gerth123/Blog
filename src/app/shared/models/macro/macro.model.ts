export interface Macro {
  id: string;
  name: string;
  unit?: string;
  desc?: string;
  kcalPerGram?: number;
  notes?: string;
  sources?: string[];
}
