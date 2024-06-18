import { Link } from "react-router-dom";
import Dropdown from "./dropdown";
import styles from "../styles/navbar.module.css";

function Navbar(){
    return(
        <header className={styles.header}>
        <nav className={styles.nav}>
            <Dropdown />
            <Link to="/"><h1>Plantpals</h1></Link>
            <button>Instagram</button>
            <button>Cart</button>
        </nav> 
        </header>
    )
}

export default Navbar;