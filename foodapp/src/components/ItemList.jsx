export default function ItemList({food , isLoading}){
    return <div>
        <div> {isLoading ? <p>loading</p> : food.extendedIngredients.map((item) =>  
            <div>
                <h5>{item.name}</h5>
                <img src="" alt="" />
            </div>

        ) } </div>
        {}
    </div>
}