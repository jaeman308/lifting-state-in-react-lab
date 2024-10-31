import { availableIngredients } from "../App";

const IngredientsList = ({availableIngredients, addToBurger}) => {
    return (
    <ul>
        {availableIngredients.map((ingredient, index) => (
        <li key={index} style={{color: ingredient.color}}>
            {ingredient.name}
             <button onClick={() => addToBurger(ingredient)}>+</button>
             </li>))}
    </ul>
)};

export default IngredientsList;