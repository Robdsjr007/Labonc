import styles from "./CardDesktop.module.sass";
import useFetchPerguntas from "../../hook/useFetchPerguntas";

const CardDesktop = () => {
  const {
    data: perguntas,
    loading,
    error,
  } = useFetchPerguntas("/perguntas.json");

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <>
      {perguntas ? (
        perguntas.map((pergunta) => (
          <article className={styles.container} key={pergunta.id}>
            <span className={styles.title}>{pergunta.titulo}</span>
            <div className={styles.ball_options}>
              <div className={`${styles.ball_option} ${styles.never}`}>
                <input value="male" name="gender" type="radio" />
                <div className={styles.circle}></div>
                <div className={styles.circle_inner}></div>
              </div>

              <div className={`${styles.ball_option} ${styles.male}`}>
                <input value="male" name="gender" type="radio" />
                <div className={styles.circle}></div>
                <div className={styles.circle_inner}></div>
              </div>

              <div className={`${styles.ball_option} ${styles.female}`}>
                <input value="female" name="gender" type="radio" />
                <div className={styles.circle}></div>
                <div className={styles.circle_inner}></div>
              </div>

              <div className={`${styles.ball_option} ${styles.non_binary}`}>
                <input value="non-binary" name="gender" type="radio" />
                <div className={styles.circle}></div>
                <div className={styles.circle_inner}></div>
              </div>

              <div className={`${styles.ball_option} ${styles.none}`}>
                <input value="none" name="gender" type="radio" />
                <div className={styles.circle}></div>
                <div className={styles.circle_inner}></div>
              </div>
            </div>
          </article>
        ))
      ) : (
        <p>Erro ao obter os dados!</p>
      )}
    </>
  );
};

export default CardDesktop;
