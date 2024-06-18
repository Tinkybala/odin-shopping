import styles from '../styles/card.module.css';

function Card({src, alt, title, price, inStock}){
    return(
        <div className={styles.card}>
            <img src={src} alt={alt} className={styles.img}/>
            <h3>{title}</h3>
            <p>{price}</p>
            {!inStock && <p>Sold Out</p>}
        </div>
    )
}

export default Card;