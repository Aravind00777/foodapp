import { useEffect, useRef, useState } from "react";
import style from './Search.module.css';
import { useGSAP } from '@gsap/react';
// const URL = "https://api.spoonacular.com/recipes/complexSearch";
// const API_KEY = "6e31452a7524443abaec6c3a6a6f5931";
const URL ="http://localhost:8000/results";

export default function Search({foodData , setFoodData}) {
  const [query, setQuery] = useState("pasta");

  


  useEffect(()=> {
    async function fetchFood(){
          const res = await fetch(`${URL}`);
          const data = await res.json();
          setFoodData(data);
          
    }
    fetchFood()
  }, [query]); 
  return (
    <div className={style.search_top}>
      <input className={style.inputs}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query }
        
      />
    </div>
  );
}
