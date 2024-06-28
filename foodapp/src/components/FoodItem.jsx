import styles from "./FoodItem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.fooditem}>
      
      <figure className={styles.food_image}>
        <img src={food.image} alt="" />
      </figure>
      <div className={styles.content_wraper}>
        <h4>{food.title}</h4>
        <button onClick={() => {
          setFoodId(food.id);
        }} className={styles.viewrecipe} >
          View recipe
        </button>
      
      </div>
    </div>
  );
}
