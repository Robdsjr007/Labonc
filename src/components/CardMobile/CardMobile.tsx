import "./CardMobile.sass";
import useFetchPerguntas from "../../hook/useFetchPerguntas";

const CardMobile = () => {
  const {
    data: perguntas,
    error,
  } = useFetchPerguntas("/perguntas.json");

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <>
      {perguntas ? (
        perguntas.map((pergunta) => (
          <article className="radio_input"  key={pergunta.id}>
            <div className="info">
              <span className="question">
                {pergunta.titulo}
              </span>
              <span className="steps">{`${pergunta.id}/${perguntas.length}`}</span>
            </div>
			<input
				type="radio"
				id={`value-1 ${pergunta.id}`}
				name="value-radio"
				value="value-1"
			  />
			  <label htmlFor={`value-1 ${pergunta.id}`}>Concordo</label>            
            <input
              type="radio"
              id={`value-2 ${pergunta.id}`}
              name="value-radio"
              value="value-2"
            />
            <label htmlFor={`value-2 ${pergunta.id}`}>Concordo um pouco</label>
            <input
              type="radio"
              id={`value-3 ${pergunta.id}`}
              name="value-radio"
              value="value-3"
            />
            <label htmlFor={`value-3 ${pergunta.id}`}>Neutro</label>
            <input
              type="radio"
              id={`value-4 ${pergunta.id}`}
              name="value-radio"
              value="value-4"
            />
            <label htmlFor={`value-4 ${pergunta.id}`}>Discordo um pouco</label>
            <input
              type="radio"
              id={`value-5 ${pergunta.id}`}
              name="value-radio"
              value="value-5"
            />
            <label htmlFor={`value-5 ${pergunta.id}`}>Discordo</label>
          </article>
        ))
      ) : (
        <p>Erro ao obter os dados!</p>
      )}
    </>
  );
};

export default CardMobile;
