import React from 'react';


const BurgerStack = props => (
    <ul>
        <img src="https://www.redmillburgers.com/images/splctr.png" alt="Red Mill"/>  
        {props.usedIngredients.map((usedIngredient, i) =>  <p key={i} style={{backgroundColor: usedIngredient.color}}>{usedIngredient.name}</p>)}            
        <button onClick={props.clearStack}>Clear</button>
    </ul>

)




export default BurgerStack;