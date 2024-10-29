// Definição dos tipos e interfaces compartilhadas
interface Tipo {
    categoria: string;
    valor: number;
  }
  
interface Pergunta {
    id: number;
    titulo: string;
    tipos: Tipo[];
  }
  
export type {Pergunta, Tipo};