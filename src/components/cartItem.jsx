import propTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

import styles from '../styles/cartItem.module.css';


function CartItem({src, alt, title, quantity}){
    console.log(quantity)
    return(
        <div className={styles.container}>
            <img src={src} alt={alt} className={styles.img}/>
            <p>{title}</p>
            <div>
                <p>{quantity}</p>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    src: propTypes.string,
    alt: propTypes.string,
    title: propTypes.string,
    quantity: propTypes.number,
}

export default CartItem;