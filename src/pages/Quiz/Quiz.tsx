import styles from "./Quiz.module.sass";

import CardMobile from "../../components/CardMobile/CardMobile";
import BackButton from "../../components/BackButton/BackButton";
import CardDesktop from "../../components/CardDesktop/CardDesktop";
import { usePerguntas } from "../../hook/usePerguntas";
import LoaderResult from "../../components/LoaderResult/LoaderResult";

const Quiz = () => {
  const { perguntas, error, loading } = usePerguntas();

  if (loading) return <LoaderResult></LoaderResult>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <>
      <br />
      <BackButton link={"/"} />
      <main className={styles.container}>
          <CardMobile perguntas={perguntas} />
          <CardDesktop perguntas={perguntas} />
      </main>
    </>
  );
};

export default Quiz;
