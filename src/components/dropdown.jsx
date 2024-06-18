import styles from '../styles/dropdown.module.css'
import { Link } from 'react-router-dom';

function Dropdown(){
    return(
        <div className={styles.dropdown}>
            <button className={styles.btn}>Shop</button>
            <div className={styles.content}>
                <Link to="/plants">Plants</Link>
                <Link to="/pots">Pots</Link>
                <Link to="/essentials">Essentials</Link>
            </div>
        </div>
    )
}

export default Dropdown;