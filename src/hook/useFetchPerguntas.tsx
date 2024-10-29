import { useState, useEffect } from 'react';
import { Pergunta } from '../types/types';

// Defina a interface para o retorno do hook
interface UseFetchReturn {
  data: Pergunta[]; // Ou ajuste para o tipo adequado
  loading: boolean;
  error: string | null;
}

const useFetchPerguntas = (url: string): UseFetchReturn => {
  const [data, setData] = useState<Pergunta[]>([]); // Especificando o tipo de dados
  const [loading, setLoading] = useState<boolean>(true); // Especificando o tipo booleano
  const [error, setError] = useState<string | null>(null); // Especificando o tipo string ou null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Ocorreu um erro desconhecido.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchPerguntas;
