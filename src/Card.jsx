import React, { useEffect, useState } from "react";
import './styles.css'
function Card() {
  const [name, setName] = useState(""); 
  const [img, setImg] = useState("");   
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const randomInt = getRandomInt(1, 10);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomInt}`);
      result.json().then((json) => {
        setName(json.name);            
        setImg(json.sprites.front_default); 
      });
    };
    fetchData();
  }, []);

  return (
    <div className="karta">
      <div>
        <img className="obrazok" src={img} alt={name} /> 
      </div>
      <div>{name}</div>
    </div>
  );
}

export default Card;