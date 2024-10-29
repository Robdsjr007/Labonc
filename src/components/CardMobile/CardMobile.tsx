import "./CardMobile.sass";
import useFetchPerguntas from "../../hook/useFetchPerguntas";
import { FormEvent, useState} from "react";

interface Pergunta {
  id: number;
  titulo: string;
}

const CardMobile = () => {
  const [respostas, setRespostas] = useState<{ [key: number]: string }>({});
  const [enviando, setEnviando] = useState(false); // Estado para controlar o texto do botão
  const [erro, setErro] = useState<string | null>(null); // Estado para exibir mensagem de erro

  const handleChange = (id: number, value: string) => {
    setRespostas((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validação: verifica se todas as perguntas foram respondidas
    if (perguntas && perguntas.some((p) => !respostas[p.id])) {
      setErro("Por favor, responda todas as perguntas!");
      return; // Impede o envio se alguma resposta estiver faltando
    }

    setErro(null); // Limpa qualquer erro anterior
    setEnviando(true); // Muda o estado para "enviando"
    console.log("Respostas:", respostas);

    setTimeout(() => {
      console.log("Dados enviados com sucesso!");
      setEnviando(false);
    }, 2000); // Simula um atraso de 2 segundos
  };

  const {
    data: perguntas,
    error,
  }: { data: Pergunta[] | null; error: string | null } =
    useFetchPerguntas("/perguntas.json");

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      {perguntas ? (
        perguntas.map((pergunta) => (
          
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
                  name={`value-radio-${pergunta.id}`}
                  value={`value-${index + 1}`}
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
        ))
      ) : (
        <p>Erro ao obter os dados!</p>
      )}

      {erro && <p className="error">{erro}</p>}

      <button
        id="btn-form"
        className={enviando ? "btn aguarde" : "btn"}
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
