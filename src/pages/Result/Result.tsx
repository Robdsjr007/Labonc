import styles from './Result.module.sass';

import BackButton from "../../components/BackButton/BackButton";

const Result = () => {
  return (
  <section className={styles.containerResult}>
	<br/>
	<BackButton link="/quiz"/>
  </section>
  );
};

export default Result;
