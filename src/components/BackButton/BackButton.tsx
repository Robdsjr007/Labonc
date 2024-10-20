import styles from './BackButton.module.sass';

import { Link, } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

type Props = {
    link: string;
}

const BackButton = ({ link }: Props) => {
    return (
        <nav className={styles.Container}>
            <Link to={link}>
                <FaChevronLeft className={styles.ArrowLeft}/>
            </Link>
        </nav>
    )
}

export default BackButton