import styles from './HeaderContainer.module.sass';

import { ReactElement, useState } from "react"

import { BiMenu } from "react-icons/bi"
import { Link } from "react-router-dom";


const HeaderContainer = (): ReactElement => {
  const [menuVisible, setMenuVisible] = useState(false);

  const showMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <nav className={styles.container}>
        <div className={styles.iconContainer}>
          <BiMenu className={styles.icon} onClick={showMenu}/>
        </div>
        <Link to="/"><img className={styles.logoMin} src="../img/logo.png" alt="logo" /></Link>
        <ul className={`${styles.links} ${menuVisible ? styles.show : ''}`}>
          <Link to={'#produtos'}><li>Produtos</li></Link>
          <Link to={'#contato'}><li>Contato</li></Link>
          <Link to={'/form#login'}><li>Login</li></Link>
          <Link to={'/form#cadastro'}><li>Cadastro</li></Link>
          <Link to={'/premium'}><li>Premium</li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderContainer