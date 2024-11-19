import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import styles from './Result.module.sass';

import BackButton from "../../components/BackButton/BackButton";
import LoaderResult from '../../components/LoaderResult/LoaderResult';

const Result = () => {
  const location = useLocation(); // Acessa os dados da navegação
  const { resultadoFinal } = location.state || {}; // Desestrutura e acessa o resultado

  const [imageBgLoaded, setImageLoaded] = useState(false);
  const [titleProfile, setTitleProfile] = useState<string | null>(null);
  const [imageProfile, setImageProfile] = useState<string | null>(null);
  const backgroundImageUrl = "../../../img/bg-result.png";

  useEffect(() => {
    const image = new Image();
    image.src = backgroundImageUrl;
    image.onload = () => {
      setImageLoaded(true);
    };

    console.log(resultadoFinal)

  }, []);




  return (
    <section className={styles.containerResult}
      style={{
        backgroundImage: imageBgLoaded ? `url(${backgroundImageUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

      <br />
      <BackButton link="/quiz" />
      {(imageProfile && titleProfile) ? (
        <p>Imagem do perfil</p>
      ) : (
        <LoaderResult/>
      )}
    </section>
  );
};

export default Result;
