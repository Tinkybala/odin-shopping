import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import './App.css'
import Plants from './Plants'
import Pots from './pots'
import Essentials from './Essentials'
import Home from './Home'
import { useParams } from 'react-router-dom'

let loaded = false;

function App() {

  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const { name } = useParams();

  //get plants from API
  useEffect(() => {
    if(!loaded){
      loaded = true;
      fetch('https://fakestoreapi.com/products', {mode: 'cors'})
      .then(response => response.json())
      .then(response => setItems(response))
    }
  }
, [])
  
  return (
    <>
      <Navbar />
      {name === "plants" ? (
        <Plants />
      ) : name === "pots" ? (
        <Pots />
      ) : name === "essentials" ? (
        <Essentials />
      ) : (
        <Home />
      )}
    </>
  )
}
export default App
