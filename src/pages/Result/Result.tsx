import styles from './Result.module.sass';
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useResultado } from "../../hook/useResultado"; // Seu hook que já traz os dados

import BackButton from "../../components/BackButton/BackButton";
import LoaderResult from '../../components/LoaderResult/LoaderResult';

const Result = () => {
  const location = useLocation(); // Acessa os dados da navegação
  const { resultadoFinal } = location.state || {}; // Desestrutura e acessa o resultado
  
  const { data, error, loading } = useResultado();  // Aqui já pegamos os dados via hook

  const [imageBgLoaded, setImageLoaded] = useState(false);
  const [perfil, setPerfil] = useState<{ titulo: string, descricao: string, estilos: string[], image: string} | null>(null); // Inicializa o estado de 'perfil'

  const backgroundImageUrl = "../../../img/bg-result.png";

  // Função para encontrar a personalidade com base no resultadoFinal, usando os dados retornados do hook
  const encontrarPersonalidade = (personalidade: string) => {
    if (data) {
      return data.find((p: any) => p.personalidade === personalidade);
    }
    return null;
  };

  // useEffect que apenas atualiza o estado do perfil quando os dados estão disponíveis
  useEffect(() => {
    if (resultadoFinal && data) {
      const personalidadeEncontrada = encontrarPersonalidade(resultadoFinal);

      if (personalidadeEncontrada) {
        setPerfil({
          titulo: personalidadeEncontrada.titulo,
          descricao: personalidadeEncontrada.descricao,
          estilos: personalidadeEncontrada.estilos,
          image: personalidadeEncontrada.image
        });
      }
    }
  }, [resultadoFinal, data]); // Reexecuta o efeito quando resultadoFinal ou data mudarem

  useEffect(() => {
    const image = new Image();
    image.src = backgroundImageUrl;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []); // Esse useEffect roda apenas uma vez, na montagem do componente

  // Exibe um loader enquanto os dados estão sendo carregados ou se não houver perfil
  if (loading || !perfil) return <LoaderResult />;

  if (error) return <p>Erro: {error}</p>;

  return (
    <section className={styles.containerResult}
      style={{
        backgroundImage: imageBgLoaded ? `url(${backgroundImageUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

      <br />
      <BackButton link="/quiz" />

      <main>
        <h1>{perfil.titulo}</h1>
        <img src={perfil.image} alt={`Imagem que simboliza ${perfil.titulo}`} />
        <article className={styles.info}>
          <h3>Parabéns, seu perfil comportamental é {resultadoFinal}, ou seja você é:</h3>
          <p>{perfil.descricao}</p>
          {perfil.estilos.map(style => (
            <strong key={style}>{`${style}`}</strong>
          ))}
          <br/>
          <Link to='/'><button id="btn">Veja mais looks!</button></Link>
          <br/>
        </article>
      </main>
    </section>
  );
};

export default Result;
