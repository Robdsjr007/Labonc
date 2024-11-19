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
  
  interface Estilo {
    estilo: string;
  }

  interface Resposta {
    personalidade: string;
    titulo: string;
    descricao: string;
    estilos: Estilo[];
  }
  
export type {Pergunta, Tipo, Resposta};