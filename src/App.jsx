import { useEffect, useState } from 'react'
import Card from './Card.jsx'
import Logo from './assets/image.png';
import './styles.css'
function App() {
  const[highScore,setHighscore]=useState(0);
  const[score,setScore]=useState(0);
  const[array,setArray]=useState([]);
  function test(value){
    const index = array.findIndex((poke) => poke === value);
    if(index === -1){
      const newArray=[...array,value];
      setScore((prevScore)=> prevScore+=1)
      setArray(newArray);
    }else{
      if(score>highScore){
        setHighscore(score);
      }
      setScore(0);
      setArray([]);
    }
  }
  return <div>
    <div className='header'>
      <img className='logo' src={Logo}></img>
      <div>
        MEMORY GAME
      </div>
      <div>
        HIGHSCORE:{highScore}
      </div>
      <div>
        SCORE:{score}
      </div>
      <div className="telo">
    <Card test={test}/>
    <Card test={test}/>
    <Card test={test}/>
    <Card test={test}/>
    <Card test={test}/>
    <Card test={test}/>
    <Card test={test}/>
    <Card test={test}/>
    
    </div>
    <div className='konec'>
        <a href='https://github.com/AdamLaszab'>
        <img className='git' src='src/assets/github-mark.png'>     
        </img>
        </a>
        <div>
        Adam Laszab
        </div>
    </div>
    </div>
  </div>
}

export default App
