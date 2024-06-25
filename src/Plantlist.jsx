import Navbar from "./components/navbar";
//import data from '../src/assets/plants.json'
import styles from '../src/styles/plants.module.css';
import Card from '../src/components/card';
import { useOutletContext } from "react-router-dom";

function Plantlist() {

    const {data, cart} = useOutletContext();

    return(
        <>
            <Navbar size={cart.reduce((total, current) => total + current.quantity, 0)} />
            <div className={styles.container}>
                {data.data.map((item, i) => (<Card src={item.image_url} alt={item.slug} title={item.scientific_name} inStock = {false} key={i} index={i.toString()} />))}
            </div>
        </>
    )
}

export default Plantlist;