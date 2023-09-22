import React, { useEffect, useState } from "react";
import './styles.css'
function Card({test}) {
  const [name, setName] = useState(""); 
  const [img, setImg] = useState(""); 
  const [value,setValue]= useState(1);
  const [pressed,setPressed]= useState(false);
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  let random=getRandomInt(1,15);
  useEffect(() => {
    setValue(random);
    const fetchData = async () => {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
      result.json().then((json) => {
        setName(json.name);            
        setImg(json.sprites.front_default); 
      });
    };
    fetchData();
  }, [pressed]);
  function sendData(){
    test(value);
    setPressed((prevValue)=>!prevValue);
  }
  return (
    <div className="karta" onClick={sendData}>
      <div>
        <img className="obrazok" src={img} alt={name} /> 
      </div>
      <div>{name}</div>
    </div>
  );
}

export default Card;