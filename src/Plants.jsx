
import Card from '../src/components/card';
import PlantDetail from './plantDetail';
import { useParams, Outlet, useOutletContext } from 'react-router-dom';
import styles from '../src/styles/plants.module.css';
import data from '../src/assets/plants.json'
import Navbar from './components/navbar';



function Plants(){
    const [cart, setCart] = useOutletContext();
    return(
        <>  
            <Outlet context={{data, cart, setCart}} />
        </>
    )
}

export default Plants;