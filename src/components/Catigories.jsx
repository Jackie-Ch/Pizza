import React, { useState } from 'react';

function Catigories() {
  const [activeCategory, SetActiveCategory] = useState(0);
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  function handleClickCategory(index) {
    SetActiveCategory(index);
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((catigory, index) => (
          <li
            onClick={() => handleClickCategory(index)}
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
