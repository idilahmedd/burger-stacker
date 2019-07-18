import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IngredientList from './IngredientList';
import BurgerStack from './BurgerStack'




class App extends React.Component {
  constructor( props ){
    super( props );
    this.state = {
      ingredients : [
        {name: 'Kaiser Bun',       color: 'saddlebrown' },
        {name: 'Sesame Bun',       color: 'sandybrown'  },
        {name: 'Gluten Free Bun',  color: 'peru'        },
        {name: 'Lettuce Wrap',     color: 'olivedrab'   },
        {name: 'Beef Patty',       color: '#3F250B'     },
        {name: 'Soy Patty',        color: '#3F250B'     },
        {name: 'Black Bean Patty', color: '#3F250B'     },
        {name: 'Chicken Patty',    color: 'burlywood'   },
        {name: 'Lettuce',          color: 'lawngreen'   },
        {name: 'Tomato',           color: 'tomato'      },
        {name: 'Bacon',            color: 'maroon'      },
        {name: 'Onion',            color: 'lightyellow' }
      ],
      stack: []
    }

    this.addIngredient = this.addIngredient.bind( this );
    this.clearBurger = this.clearBurger.bind( this );
  }

  addIngredient(e, i){
    e.preventDefault();
    const stackCopy = Array.from(this.state.stack);
    stackCopy.unshift(this.state.ingredients[i]);
    this.setState({
      stack: stackCopy
    })
  }
  clearStack(e) {
    e.preventDefault();
    this.setState({
      stack: []
    })
  }

  render () {
    const listCopy = Array.from(this.state.ingredients);
    const stackCopy =  Array.from(this.state.stack);
    return (
      <>
        <IngredientList ingredients={listCopy} addIngredient={this.state.newIngredient}/>
        <BurgerStack usedIngredient={stackCopy}/>
      </>
    )
  }
}



export default App;






