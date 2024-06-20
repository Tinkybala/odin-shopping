import Navbar from "./components/navbar";
import data from '../src/assets/plants.json'
import styles from '../src/styles/plants.module.css';
import Card from '../src/components/card';

function Plantlist() {
    return(
        <>
            <Navbar />
            <div className={styles.container}>
                {data.data.map((item, i) => (<Card src={item.image_url} alt={item.slug} title={item.scientific_name} inStock = {false} key={i} index={i.toString()} />))}
            </div>
        </>
    )
}

export default Plantlist;