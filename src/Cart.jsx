import { useOutletContext } from "react-router-dom";
import CartItem from "./components/cartItem";
import Navbar from "./components/navbar";
import styles from './styles/Cart.module.css'

function Cart(){
    const [cart, setCart] = useOutletContext();
    console.log(cart);
    return(
        <>  
            <Navbar />
            <div className={styles.cart}>
                <h2>Cart</h2>
                {cart.length > 0 ? cart.map((item, i) => <CartItem src={item.image_url} title={item.scientific_name} quantity={item.quantity} key={i}/>) : <p>Shopping cart is empty</p>}
            </div>
        </>
    )
}

export default Cart;