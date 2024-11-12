import "./CardMobile.sass";
import useFetchPerguntas from "../../hook/useFetchPerguntas";
import { FormEvent, useState } from "react";
import { Pergunta } from "../../types/types";

const CardMobile = () => {
  const [respostas, setRespostas] = useState<{ [key: number]: string }>({});
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const {
    data: perguntas,
    error,
    loading,
  }: { data: Pergunta[] | null; error: string | null; loading: boolean } =
    useFetchPerguntas("/perguntas.json");

  if (error) return <p>Erro: {error}</p>;

  const handleChange = (id: number, value: string) => {
    setRespostas((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (perguntas && perguntas.some((p) => !respostas[p.id])) {
      setErro("Por favor, responda todas as perguntas!");
      return;
    }
    setErro(null);
    setEnviando(true);
    console.log("Respostas:", respostas);
    setTimeout(() => {
      console.log("Dados enviados com sucesso!");
      setEnviando(false);
    }, 2000);
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      {!loading ? (
        perguntas.map((pergunta) => {
          const valores = pergunta.tipos.map(
            (tipo) => `${tipo.categoria}: ${tipo.valor}`
          ); // Combina categoria e valor
          return (
            <article className="radio_input" key={pergunta.id}>
              <div className="info">
                <span className="question">{pergunta.titulo}</span>
                <span className="steps">{`${pergunta.id}/${perguntas.length}`}</span>
              </div>
              {[
                "Concordo",
                "Concordo um pouco",
                "Neutro",
                "Discordo um pouco",
                "Discordo",
              ].map((label, index) => (
                <div key={`${pergunta.id}-${index}`}>
                  <input
                    type="radio"
                    id={`value-${index + 1}-${pergunta.id}`}
                    className={`value-${index + 1}`}
                    name={`value-radio-${pergunta.id}`}
                    value={valores[index]} // Usa a variável corretamente
                    onChange={(e) => handleChange(pergunta.id, e.target.value)}
                  />
                  <label
                    htmlFor={`value-${index + 1}-${pergunta.id}`}
                    className={`value-${index + 1}`}
                  >
                    {label}
                  </label>
                </div>
              ))}
            </article>
          );
        })
      ) : (
        <p>Carregando perguntas...</p>
      )}

      {erro && <p className="error">{erro}</p>}

      <button
        id="btn-form"
        className={!loading ? (enviando ? "btn aguarde" : "btn") : "invisible"}
        type="submit"
        disabled={enviando}
      >
        {enviando ? "Aguarde..." : "Enviar"}
      </button>
      <br />
    </form>
  );
};

export default CardMobile;
