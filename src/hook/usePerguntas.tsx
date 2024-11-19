// hooks/usePerguntas.ts
import useFetchPerguntas from "./useFetchPerguntas";

export const usePerguntas = () => {
  const {
    data: perguntas,
    error,
    loading,
  } = useFetchPerguntas("/perguntas.json");

  return { perguntas, error, loading };
};
