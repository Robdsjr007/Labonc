import styles from './Result.module.sass';
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useResultado } from "../../hook/useResultado";

import BackButton from "../../components/BackButton/BackButton";
import LoaderResult from '../../components/LoaderResult/LoaderResult';

const Result = () => {
  const location = useLocation();
  const { resultadoFinal } = location.state || {};
  
  const { data, error, loading } = useResultado();

  const [imageBgLoaded, setImageBgLoaded] = useState(false);
  const [imagePerfilLoaded, setImagePerfilLoaded] = useState(false);
  const [perfil, setPerfil] = useState<{ titulo: string, descricao: string, estilos: string[], image: string } | null>(null);

  const backgroundImageUrl = "../../../img/bg-result.png";

  // Encontra a personalidade com base no resultado
  const encontrarPersonalidade = (personalidade: string) => {
    if (data) {
      return data.find((p: any) => p.personalidade === personalidade);
    }
    return null;
  };

  // Atualiza o estado do perfil com base nos dados disponíveis
  useEffect(() => {
    if (resultadoFinal && data) {
      const personalidadeEncontrada = encontrarPersonalidade(resultadoFinal);

      if (personalidadeEncontrada) {
        setPerfil({
          titulo: personalidadeEncontrada.titulo,
          descricao: personalidadeEncontrada.descricao,
          estilos: personalidadeEncontrada.estilos,
          image: personalidadeEncontrada.image,
        });
      }
    }
  }, [resultadoFinal, data]);

  // Preload da imagem de fundo
  useEffect(() => {
    const bgImage = new Image();
    bgImage.src = backgroundImageUrl;
    bgImage.onload = () => setImageBgLoaded(true);
  }, []);

  // Exibe um loader enquanto os dados estão sendo carregados ou se não houver perfil
  if (loading || !perfil) return <LoaderResult />;
  if (error) return <p>Erro: {error}</p>;

  return (
    <section
      className={styles.containerResult}
      style={{
        backgroundImage: imageBgLoaded ? `url(${backgroundImageUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <br/>
      <BackButton link="/quiz" />

      <main>
        <h1>{perfil.titulo}</h1>
        <div className={styles.imageWrapper}>
          {!imagePerfilLoaded && <LoaderResult />} {/* Placeholder enquanto carrega */}
          <img
            src={perfil.image}
            className={imagePerfilLoaded ? styles.perfil : styles.hidden}
            alt={`Imagem que simboliza ${perfil.titulo}`}
            onLoad={() => setImagePerfilLoaded(true)} // Marca a imagem como carregada
          />
        </div>
        <article className={styles.info}>
          <h3>Parabéns, seu perfil comportamental é {resultadoFinal}, ou seja você é:</h3>
          <p>{perfil.descricao}</p>
          {perfil.estilos.map(style => (
            <strong key={style}>{`${style}`}</strong>
          ))}
          <Link to='/'><button id="btn">Veja mais looks!</button></Link>
        </article>
      </main>
    </section>
  );
};

export default Result;
