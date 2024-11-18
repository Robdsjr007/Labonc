import { useEffect, useState } from 'react';
import styles from './Result.module.sass';

import BackButton from "../../components/BackButton/BackButton";
import LoaderResult from '../../components/LoaderResult/LoaderResult';

const Result = () => {
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
  }, [backgroundImageUrl]);


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
