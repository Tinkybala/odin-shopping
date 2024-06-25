import { useOutletContext } from "react-router-dom";
import Navbar from "./components/navbar";

function Home(){
    const [cart, setCart] = useOutletContext();
    return(
        <>
        <Navbar size={cart.reduce((total, current) => total + current.quantity, 0)}/>
        <h2>We love our plants</h2>
        <h2>About Us</h2>
        <p>Here at Plantpals, we are devoted to our houseplants and customers. We specialise in exotics and do accept custom orders for which we will try 
            our best to source from all around the world.
        </p>
        </>
    )
}

export default Home;