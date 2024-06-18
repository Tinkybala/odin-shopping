import plants from '../src/assets/plants.json';
import Card from '../src/components/card';
import styles from '../src/styles/plants.module.css';

function Plants(){
    console.log(plants)
    return(
        <div className={styles.container}>
            {plants.data.map((item, i) => (<Card src={item.image_url} alt={item.slug} title={item.scientific_name} inStock = {false} key={i} />))}
        </div>
    )
}

export default Plants;