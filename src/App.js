import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Catigories from './components/Catigories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import pizzas from './assets/pizzas.json';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Catigories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza) => (
              <PizzaBlock
                id={pizza.id}
                title={pizza.name}
                price={pizza.price}
                image={pizza.imageUrl}
                rating={pizza.rating}
                sizes={pizza.sizes}
                types={pizza.types}
                key={pizza.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
