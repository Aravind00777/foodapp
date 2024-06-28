import { useEffect, useState } from "react";
import style from "./FoodDetails.module.css";
export default function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "6e31452a7524443abaec6c3a6a6f5931";
  const [food, setFood] = useState({});
  const [isLoading , setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div className={style.wraper}>
      <h5 className={style.fooddetail}>food details</h5>
      <img src={food.image} alt="" />
      <h4>{food.title}</h4>
      <span>
        <strong>{food.readyInMinutes} Minutes</strong>
      </span>
      <span>
        <strong>Serve {food.servings}</strong>
      </span>
      <span>{food.vegetarian ? "Vegetarian" : "Non Vegetarian"}</span>
      <h3 className={style.instruction_title}>Insturcions</h3>
      <ul className={style.instructions}>
        {isLoading ? "date loading.....":food.analyzedInstructions[0].steps.map((step) => (
          <li>{step.step}</li>
        ))}
      </ul>
    </div>
  );
}
