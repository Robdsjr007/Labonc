import styles from "./CardDesktop.module.sass";
import { FormEvent, useState } from "react";
import { Pergunta } from "../../types/types";
import { useNavigate } from "react-router-dom";

type CardDesktopProps = {
  perguntas: Pergunta[];
};

const CardDesktop = ({ perguntas }: CardDesktopProps) => {
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

    const resultadoFinal = Object.values(respostas)
      .map((resposta) => resposta.split(":")[0]) // Extrai categoria antes do ":"
      .join("");

    navigate("/result", { state: { resultadoFinal } });
  
    setEnviando(false);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      {perguntas &&
        perguntas.map((pergunta) => {
          const valores = pergunta.tipos.map(
            (tipo) => `${tipo.categoria}: ${tipo.valor}`
          ); // Combina categoria e valor
          return (
            <article className={styles.container} key={pergunta.id}>
              <span className={styles.title}>{pergunta.titulo}</span>
              <div className={styles.ball_options}>
                {[
                  "Concordo",
                  "",
                  "",
                  "",
                  "Discordo",
                ].map((label, index) => (
                  <div
                    key={`${pergunta.id}-${index}`}
                    className={`${styles.ball_option} ${styles[`option-${index + 1}`]}`}
                  >
                    <input
                      type="radio"
                      id={`value-${index + 1}-${pergunta.id}`}
                      className={`value-${index + 1}`}
                      name={`value-radio-${pergunta.id}`}
                      value={valores[index]}
                      onChange={(e) => handleChange(pergunta.id, e.target.value)}
                    />
                    <div className={styles.circle}></div>
                    <div className={styles.circle_inner}></div>
                    <label
                      htmlFor={`value-${index + 1}-${pergunta.id}`}
                      className={styles.label}
                    >
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </article>
          );
        })}

      {erro && <p className={styles.error}>{erro}</p>}

      <button
        id={enviando ? `btn aguarde` : `btn`}
        type="submit"
        disabled={enviando}
        >
        Enviar
      </button>
    </form>
  );
};

export default CardDesktop;
