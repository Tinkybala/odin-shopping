import { useParams, useOutletContext } from "react-router-dom";
import Navbar from "./components/navbar";
import { useState } from "react";
import styles from './styles/plantDetail.module.css'

function PlantDetail({index}){

    const [quantity, setQuantity] = useState(1)
    const {data, cart, setCart} = useOutletContext();
    const plant = data.data[index];

    function handleSubmit(e){
        e.preventDefault();
        //look for existing object
        const exist = cart.find(item => item.id === plant.id);
        console.log(exist);
        if(exist){
            setCart(cart.map(item => item === exist ? {...exist, quantity: exist.quantity + Number(quantity)}  : item))
        }
        else{
            setCart([...cart, {...plant, quantity: Number(quantity)}]);
        }
       

    }

    function handleChange(e){
        setQuantity(e.target.value);
    }

    return(
        <>
            <Navbar size={cart.reduce((total, current) => total + current.quantity, 0)}/>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h2>{plant.scientific_name}</h2>
                    <p>
                        Alocasia macrorhizzos, commonly known as the Giant Taro is a perennial plant native to Southeast Asia. It is cultivated for its edible young bulbs.
                        <br/>
                        <br/>
                        Plant care: Full sun to Semi-Shade, Lots of water, Fast growing
                    </p>
                    <form className={styles.form} onSubmit={e => handleSubmit(e)}>
                        <label htmlFor="quantity">Quantity: </label>
                        <input type="number" id="quantity" name="quantity" defaultValue={quantity} onChange={e => handleChange(e)}/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <img src="https://i0.wp.com/www.woonleng.com/wp-content/uploads/2023/04/339286514_581122250644442_8088303612637108660_n.jpg?fit=1000%2C1000&ssl=1" className={styles.img}/>
            </div>
        </>
    )
}

export default PlantDetail;