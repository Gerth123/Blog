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