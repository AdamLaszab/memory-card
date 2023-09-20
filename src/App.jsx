import { useEffect, useState } from 'react'
import Card from './Card.jsx'
import Logo from './assets/image.png';
import './styles.css'
function App() {
  const[score,setScore]=useState(0);
  return <div>
    <div className='header'>
      <img className='logo' src={Logo}></img>
      <div>
        MEMORY GAME
      </div>
      <div>
        SCORE:{score}
      </div>
    </div>
    <div className="telo">
    <Card />
    <Card />
    <Card />
    <Card />
    
    </div>
  </div>
}

export default App
