import FoodItem from "./FoodItem";
import style from './FoodList.module.css'
export default function FoodList({ foodData ,setFoodId }) {
  return (
    <div className={style.foodlist}>
      {foodData.map((food ) => (
        
        <FoodItem key={food.id} setFoodId={setFoodId} food={food} />
      ))}
    </div>
  );
}
