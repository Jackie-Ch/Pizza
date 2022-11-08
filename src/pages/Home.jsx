import React, { useState, useEffect } from 'react';
import Catigories from '../components/Catigories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from '../redux/features/pizzas/pizzasSlice';

function Home({ searchValue }) {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { activeCategory, isLoading, sortValue } = useSelector(
    (state) => state.pizzas
  );
  const dispatch = useDispatch();

  const itemsOnPage = 6;

  useEffect(() => {
    dispatch(setLoading(true));

    const order = sortValue.propertySort.includes('-') ? 'asc' : 'desc';
    const sortBy = sortValue.propertySort.replace('-', '');
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';

    fetch(
      `https://631613995b85ba9b11ef1dde.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        dispatch(setLoading(false));
      });
    window.scrollTo(0, 0);
  }, [activeCategory, sortValue, dispatch]);

  const userCrop = paginate(items, currentPage, itemsOnPage);

  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const pizzaBlock = userCrop
    .filter((obj) => {
      if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  function paginate(pizzas, currentPage, itemsOnPage) {
    const startIndex = (currentPage - 1) * itemsOnPage;
    return [...pizzas].splice(startIndex, itemsOnPage);
  }
  console.log(isLoading);
  return (
    <>
      <div className="content__top">
        <Catigories />
        <Sort value={sortValue} setSortValue={(i) => i} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzaBlock}</div>
      <Pagination
        items={items}
        itemsOnPage={itemsOnPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default Home;
