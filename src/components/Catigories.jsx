import React from 'react';
import { setActiveCategory } from '../redux/features/pizzas/pizzasSlice';
import { useDispatch, useSelector } from 'react-redux';

function Catigories() {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.pizzas.activeCategory);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((catigory, index) => (
          <li
            onClick={() => dispatch(setActiveCategory(index))}
            key={index}
            className={activeCategory === index ? 'active' : ''}
          >
            {catigory}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catigories;
