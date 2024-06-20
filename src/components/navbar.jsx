import { Link } from "react-router-dom";
import Dropdown from "./dropdown";
import styles from "../styles/navbar.module.css";
import IGLogo from "../assets/instagram.svg";

function Navbar(props){

    return(
        <header className={styles.header}>
        <nav className={styles.nav}>
            <Dropdown />
            <Link to="/"><h1>Plantpals</h1></Link>
            <a className={styles.instagram} href="https://www.instagram.com/woonlengnursery/"><img src={IGLogo} alt="instagram" className={styles.instagramLogo}/></a>
            <p>{props.size}</p>
            <Link to="/cart">Cart</Link>
        </nav> 
        </header>
    )
}

export default Navbar;