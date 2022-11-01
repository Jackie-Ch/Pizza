import React from 'react';

function Catigories({ value, setActiveCategory }) {
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
            onClick={() => setActiveCategory(index)}
            key={index}
            className={value === index ? 'active' : ''}
          >
            {catigory}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catigories;
