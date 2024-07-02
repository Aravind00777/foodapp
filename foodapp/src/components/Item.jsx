import style from "./ItemList.module.css";
export default function ({ item }) {
  return (
    <div>
      <img
        className={style.ingredientImage}
        src={`https://img.spoonacular.com/ingredients_100x100/` + item.image}
        alt=""
      />
      <h5>{item.name}</h5>
    </div>
  );
}
