import styles from "./Quiz.module.sass";

import CardMobile from "../../components/CardMobile/CardMobile";
import BackButton from "../../components/BackButton/BackButton";
import CardDesktop from "../../components/CardDesktop/CardDesktop";

const Quiz = () => {
  return (
    <>
      <br />
      <BackButton link={"/"} />
      <main className={styles.container}>
        <CardMobile />
        <CardDesktop />
      </main>
    </>
  );
};

export default Quiz;
