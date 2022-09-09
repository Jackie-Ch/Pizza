import React, { useState, useEffect } from 'react';

import Catigories from '../components/Catigories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://631613995b85ba9b11ef1dde.mockapi.io/items')
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content__top">
        <Catigories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((pizza) => (
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
    </>
  );
}

export default Home;
