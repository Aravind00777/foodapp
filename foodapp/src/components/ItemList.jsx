import Item from "./Item";
import style from "./ItemList.module.css";
export default function ItemList({food , isLoading}){
    return <div>
        <div className={style.ingredient_wrapper}> {isLoading ? <p>loading</p> : food.extendedIngredients.map((item) =>  
            <Item item={item}/>
        ) } </div>
        {}
    </div>
}