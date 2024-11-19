import styles from './Home.module.sass'

import HeaderContainer from '../../components/Header/HeaderContainer';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<main>
			<section className={styles.HomeContainer}>
				<HeaderContainer />
				<main className={styles.conteudo}>
					<img className={styles.logoMobile} src="../../img/logo.png" alt="logo" />
					{/* <img className={styles.logoDesktop} src="../../img/logoDesktop.png" alt="logo Desktop" /> */}
					<img className={styles.fotoMinimalista} src="../../img/minimalism.png" alt="imagem minimalista" />
					<p>Moda que transforma identidade em estilo.</p>
					<Link to='/quiz'><button id="btn">Veja seu estilo já</button></Link>
				</main>
			</section>
		</main>
	);
};

export default Home;
