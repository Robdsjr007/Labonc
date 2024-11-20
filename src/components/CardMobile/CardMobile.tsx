import styles from "./CardMobile.module.sass";
import { FormEvent, useState } from "react";
import { Pergunta } from "../../types/types";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

type CardMobileProps = {
  perguntas: Pergunta[];
};

const CardMobile = ({ perguntas }: CardMobileProps) => {
  const [respostas, setRespostas] = useState<{ [key: number]: string }>({});
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (id: number, value: string) => {
    setRespostas((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (perguntas.some((p) => !respostas[p.id])) {
      setErro("Responda todas as perguntas!");
      return;
    }
    setErro(null);
    setEnviando(true);

    // Processar o resultado final
    const resultadoFinal = Object.values(respostas)
      .map((resposta) => resposta.split(":")[0]) // Extrai apenas a categoria (antes do ":")
      .join(""); // Junta todas as categorias

    // console.log("Resultado Final:", resultadoFinal); // ENTJ

    navigate("/result", { state: { resultadoFinal } });

    setEnviando(false);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      {perguntas &&
        perguntas.map((pergunta: Pergunta) => {
          const valores = pergunta.tipos.map(
            (tipo) => `${tipo.categoria}: ${tipo.valor}`
          ); // Combina categoria e valor
          return (
            <article className={styles.radio_input} key={pergunta.id}>
              <div className={styles.info}>
                <span className={styles.question}>{pergunta.titulo}</span>
                <span
                  className={styles.steps}
                >{`${pergunta.id}/${perguntas.length}`}</span>
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
                    className={styles[`value-${index + 1}`]}
                    name={`value-radio-${pergunta.id}`}
                    value={valores[index]} // Usa a variável corretamente
                    onChange={(e) => handleChange(pergunta.id, e.target.value)}
                  />
                  <label
                    htmlFor={`value-${index + 1}-${pergunta.id}`}
                    className={styles[`value-${index + 1}`]}
                  >
                    {label}
                  </label>
                </div>
              ))}
            </article>
          );
        })}

      {erro && <ErrorMessage error={erro} />}

      <button
        id={enviando ? `btn aguarde` : `btn`}
        type="submit"
        disabled={enviando}
      >
        {enviando ? "Aguarde..." : "Enviar"}
      </button>
    </form>
  );
};

export default CardMobile;
