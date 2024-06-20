import styles from '../styles/card.module.css';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function Card({src, alt, title, price, inStock, index}){
    return(
        <Link to={index} className={styles.link}>
            <div className={styles.card}>
                <img src={src} alt={alt} className={styles.img}/>
                <h3>{title}</h3>
                <p>{price}</p>
                {!inStock && <p>Sold Out</p>}
            </div>
        </Link>
    )
}

Card.propTypes = {
    src: propTypes.string,
    alt: propTypes.string,
    title: propTypes.string,
    price: propTypes.number,
    inStock: propTypes.bool,
    index: propTypes.string,
}

export default Card;