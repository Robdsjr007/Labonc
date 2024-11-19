// hooks/usePerguntas.ts
import useFetchPerguntas from "./useFetchPerguntas";

export const useResultado = () => {
  const {
    data,
    error,
    loading,
  } = useFetchPerguntas("/resultado.json");

  return { data, error, loading };
};
