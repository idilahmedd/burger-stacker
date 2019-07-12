import React from 'react';


const BurgerStack = props => (
    <ul>

    {props.clickedIngredient.map((newList, i) => <li key={i}>{newList.name}  </li>)}

    </ul>

)




export default BurgerStack;